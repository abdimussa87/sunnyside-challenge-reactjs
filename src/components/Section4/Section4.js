import React from "react";
import "./Section4.css";
import { useMediaQuery } from 'react-responsive'
import { useEffect } from "react";
function Section4() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
      })
      useEffect(() => {
        console.log(isDesktop);
      }, [isDesktop]);
  return (
    <div className="section4">
      <img src={isDesktop?"/images/desktop/image-gallery-milkbottles.jpg":"/images/mobile/image-gallery-milkbottles.jpg"} alt="" />
      <img src={isDesktop?"/images/desktop/image-gallery-orange.jpg":"/images/mobile/image-gallery-orange.jpg"} alt="" />
      <img src={isDesktop?"/images/desktop/image-gallery-cone.jpg":"/images/mobile/image-gallery-cone.jpg"} alt="" />
      <img src={isDesktop?"/images/desktop/image-gallery-sugarcubes.jpg":"/images/mobile/image-gallery-sugar-cubes.jpg"} alt="" />
    </div>
  );
}

export default Section4;
