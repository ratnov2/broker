export const setSliderPerView = (length: number) => {
  if (length > 2) return 3
  return length
}