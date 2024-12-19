import { useEffect, useState } from "react";

export function useDebounce({ inputValue, miliseconds }) {
  const [debounceValue, setDebounceValue] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase().trim()}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, miliseconds);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return debounceValue;
}
