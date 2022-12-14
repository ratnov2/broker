export const getHiddenCard = (str:string, x = 4) => {
  let basestr = str.slice(12, 17);
  let newstr = str.slice(0, 12);
  let secondwstr = newstr.replace(newstr, '*'.repeat(5));
  return secondwstr + basestr;
}