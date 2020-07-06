import { getAvailableBatsmenIDs } from "../../../helpers/cricket";

test("getAvailableBatsmenIDs", () => {
  expect(getAvailableBatsmenIDs([1, 2, 3, 4], [])).toStrictEqual([1, 2, 3, 4]);
  expect(getAvailableBatsmenIDs([1, 2, 3, 4], [2])).toStrictEqual([1, 3, 4]);
  expect(getAvailableBatsmenIDs([1, 2, 3, 4], [2, 3])).toStrictEqual([1, 4]);
});
