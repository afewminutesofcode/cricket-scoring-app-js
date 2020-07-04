import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

const Link1 = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

export const MUIButton = (props) => {
  const {
    disabled = false,
    extraSelector = "",
    label,
    linkPath,
    onClick,
    type = "button",
    style,
    color = "primary",
    fullWidth = false,
    variant = "contained"
  } = props;
  return linkPath !== undefined ? (
    <Button
      component={Link1}
      className={`${extraSelector} marginTopBtm10`}
      disabled={disabled}
      variant={variant}
      color={color}
      to={`/${linkPath}`}
    >
      {label}
    </Button>
  ) : (
    <Button
      className={extraSelector}
      type={type}
      onClick={onClick}
      style={fullWidth ? { ...style, width: "100%" } : style}
      color={color}
      variant={variant}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
