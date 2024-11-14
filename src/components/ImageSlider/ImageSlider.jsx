"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const ImageSlider = ({ image1, image2, width = "500px", height = "500px" }) => {
  const dimension = {
    width,
    height,
  };

  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const [canStart, setCanStart] = useState(false);

  const slideStart = () => {
    setCanStart(true);
  };
  const slideEnd = () => {
    setCanStart(false);
  };


  const slideMove = (e) => {
    let w = imageRef.current.getBoundingClientRect();
    // console.log("slide w: ", );
    console.log(canStart);
    if(!canStart) return;

    if(!overlayRef.current || !sliderRef.current) return;

    let pos = getCursorPos(e);

    if(pos < 0) pos = 0;
    if(pos > w?.width) pos = w?.width;

    slide(pos);
  }

  const slide = (x) => {
    overlayRef.current.style.width = x+"px";
    sliderRef.current.style.left = x+"px";
  }

  const getCursorPos = (e) => {
    let a = imageRef.current.getBoundingClientRect();
    // console.log("epage: ", e.pageX);
    let x = e.pageX - a.left;
    // console.log("e.apgeX - aleft: ", x);
    // console.log("scrollX; ", window.scrollX);
    // x = x - window.scrollX;
    // console.log("x: ", x);
    return x;
  }

  useEffect(() => {
  
    window.addEventListener("mouseup", slideEnd, false);
    window.addEventListener("touchend", slideEnd, false);

    window.addEventListener('mousemove', slideMove, false);
    window.addEventListener('touchmove', slideMove, false);

    return () => {
      window.removeEventListener("mouseup", slideEnd, false);
      window.removeEventListener("touchend", slideEnd, false);
      window.removeEventListener("mousemove", slideMove, false);
      window.removeEventListener("touchmove", slideMove, false);
    };
  }, [canStart]);


  return (
    <div className="top-container">
      <div className="slider-container">
        <div className="">
          <img src={image1} alt="image-1" style={dimension} ref={imageRef} />
        </div>
        <div className="overlay" ref={overlayRef}>
          <img src={image2} alt="image-2" style={dimension}/>
        </div>
        <span className="slider" ref={sliderRef} onMouseDown={slideStart} onTouchStart={slideStart}></span>
      </div>
    </div>
  );
};

export default ImageSlider;
