export const convertToHiddenNumber = (string?:string, x = 4) => {
  const baseString = string.slice(12, 17);
  const newString = string.slice(0, 12);
  const secondWString = newString.replace(newString, '*'.repeat(5));
  return secondWString + baseString;
}