import React, { useEffect, useRef, useState } from "react";
import "./index.css";
const RADIUS = 50;

function getRandomHexColor() {
  const hexDigits = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return color;
}

const OverlappingCircle = () => {
  const [circleCord, setCircleCord] = useState([]);
  const mouseDownRef = useRef(false);

  const onMouseDown = () => {
    mouseDownRef.current = true;
  };
  
  const onMouseUp = () => {
    mouseDownRef.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", drawCircle);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", drawCircle);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const drawCircle = (e) => {
    console.log("isMouseDown: ", mouseDownRef.current);
    if (!mouseDownRef.current) return;

    console.log("working");
    const { clientX, clientY } = e;
    const newCircleCordinate = {
      top: clientY - RADIUS,
      left: clientX - RADIUS,
      bottom: clientY + RADIUS,
      right: clientX + RADIUS,
      backgroundColor: "blue",
    };

    setCircleCord((prevCord) => {
      for (let i = 0; i < prevCord.length; i++) {
        if (elementOverlaps(newCircleCordinate, prevCord[i])) {
          newCircleCordinate.backgroundColor = getRandomHexColor();
          break;
        }
      }

      return [...prevCord, newCircleCordinate];
    });
  };
//   console.log(isMouseDown);

  const elementOverlaps = (circle1, circle2) => {
    const collide = !(
      circle1.top > circle2.bottom ||
      circle1.right < circle2.left ||
      circle1.bottom < circle2.top ||
      circle1.left > circle2.right
    );
    return collide;
  };

  return (
    <div className="container-wrapper">
      {circleCord.map((circle, index) => (
        <Circle key={index} {...circle} />
      ))}
    </div>
  );
};

const Circle = ({ top, left, backgroundColor }) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        backgroundColor,
        opacity: "0.5",
        borderRadius: "50%",
        width: `${RADIUS * 2}px`,
        height: `${RADIUS * 2}px`,
      }}
    ></div>
  );
};

export default OverlappingCircle;
