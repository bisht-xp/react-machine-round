import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("checking");
      setStatus("Hey you are Online!!!");
    });

    window.addEventListener("offline", () => {
      console.log("checking offline");
      setStatus("Hey You are offline");
    });

    return () => {
      window.removeEventListener("online", () => {
        console.log("checking");
        setStatus("Hey you are Online!!!");
      });
      window.removeEventListener("offline", () => {
        console.log("checking");
        setStatus("Hey you are Offline!!!");
      });
    };
  }, [status]);

  return status;
};

export default useOnline;
