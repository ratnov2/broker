export default function myImageLoader({ src, width, quality }:any) {
  return `https://22212.com/${src}?w=${width}&q=${quality || 75}`
}