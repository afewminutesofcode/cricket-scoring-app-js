import { formatPlayerName } from "../../../helpers/cricket";

const player = {
  firstName: "Aaron",
  lastName: "Finch",
  dob: "1986-11-17",
  battingStyle: "right",
  bowlingArm: "left",
  bowlingType: "spin",
  bowlingStyle: "Slow left-arm orthodox",
  order: 2,
  id: "2"
};

test("formatPlayerName", () => {
  expect(formatPlayerName(player)).toBe("A.Finch");
});
