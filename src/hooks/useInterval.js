import { useEffect } from "react"


export const useInterval = (callback, timer) => {
    useEffect(() => {
        let interval = setInterval(() => {
            callback();
        }, timer)

        return () => clearInterval(interval);
    }, [])
}