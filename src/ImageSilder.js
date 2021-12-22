import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://m.media-amazon.com/images/I/61PiLohzyTL._SX3000_.jpg" }
];
function ImageSilder() {
  return (
    <SimpleImageSlider
    images={images}
    showBullets={false}
    showNavs={false}
  />
  )
}

export default ImageSilder
