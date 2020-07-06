import React from "react";
import Typography from "@material-ui/core/Typography";

export const MUISmallLabel = ({ label }) => (
  <Typography
    style={{
      color: "rgba(0, 0, 0, 0.54)",
      textTransform: "uppercase",
      fontSize: 10
    }}
  >
    {label}
  </Typography>
);
