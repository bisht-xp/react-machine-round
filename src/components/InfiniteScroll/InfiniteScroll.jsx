import React, { useEffect, useState } from "react";
import "./index.css";

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);

  const onScroll = (event) => {
    const scrolledTo = window.scrollY + window.innerHeight;
    // const isReachedBottom = document.body.s
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight-10) {
        setCount(prev => prev + 50);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="wrapper">
      {[...Array(count)].map((i, index) => (
        <div className="box" key={index}>
          <div className="text">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
