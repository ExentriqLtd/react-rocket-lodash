/** @format */

export const utilityArrayToObject = (
  array: Array<any>,
  keyField: string,
): Object => {
  const objFormatted: Object = array.reduce((obj, item): any => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

  return objFormatted;
};
