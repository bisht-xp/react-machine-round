import { useEffect, useState } from "react";

function usePokemon(timer) {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // let interval = setInterval(() => {
    //   setLoading(true);
    //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    //   .then((res) => res.json())
    //   .then((data) => setPokemon([...data.results]))
    //   .catch((err) => setError("Something went wrong!")).finally(() => setLoading(false));
    // }, timer);

    return () => clearInterval(interval);
  }, []);

  return { pokemon, error, loading };
}

export default usePokemon;
