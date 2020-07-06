export const emptyLabelValue = () => ({
  label: "",
  value: ""
});

export const removeEmptyStr = (arr) => arr.filter((item) => item !== "");

export const objKeyExists = (obj, key1, key2) =>
  obj[key1] !== undefined && obj[key1][key2] !== undefined ? true : false;
