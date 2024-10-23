import React, { useEffect } from "react";
import "./index.css";

const CaptureProduct = ({ items }) => {
  // now capture the item in the current view height

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        // console.log("context: ", context, "\nArgs: ", args);
        func.apply(context, args);
      }, delay);
    };
  };

  const inViewPort = (ele) => {
    const bounding = ele.getBoundingClientRect();
    // console.log(ele.documentElement)
    // console.log(bounding, ele);
    // console.log(window.innerWidth, window.innerHeight);
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const getBlocks = function () {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
      if(inViewPort(block)) {
        console.log("block: ", block.innerHTML);
      }
    });
  };

  useEffect(() => {
    const debouncedScroll = debounce(getBlocks, 3000);
    document.addEventListener("scroll", debouncedScroll);

    return () => document.removeEventListener("scroll", debouncedScroll);
  }, []);
  return (
    <div className="container-wrapper">
      {/* <div > */}
      {Array.from(Array(items).keys()).map((item) => (
        <div className="block" key={item}>
          {item + 1}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default CaptureProduct;
