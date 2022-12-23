export const tailwindColors = {
  purple: '#6160DC',
  'light-blue': '#03DAF2',
  orange: '#FFB74A',
  green: '#00A389',
  black: '#22242C',
  white: '#ffffff',
  red: '#FF4A55',
  gray: '#8E8EA1',
  'light-gray': '#F5F5F5'
}
export const tailwindColorsRGBA ={
  purple:(value:string)=>`rgba(97, 96, 220, ${value})`,
  'light-blue':(value:string)=>`rgba(3, 218, 242, ${value})`

}
export type tailwindColorsType = keyof typeof tailwindColors