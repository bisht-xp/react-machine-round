import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import useOnline from "../../hooks/useOnline";
// import usePokemon from "../../hooks/usePokemons";

export const Pokemon = () => {
  //   const {pokemon, error, loading} = usePokemon(5000);
    // const status = useOnline();
    const [count, setCount] = useState(0);
    // useInterval(() => {
    //     setCount(c => c+1)
    // }, 1000);
  //   if(loading) {
  //     return <div>Loading...</div>
  //   }

  //   if (error.length !== 0) {
  //     return <div>{error}</div>;
  //   }

  return (
    // <div>
    //   {pokemon && pokemon?.length != 0 ? (
    //     pokemon.map((item, i) => <div key={i}>{item.name}</div>)
    //   ) : (
    //     <div>Empty</div>
    //   )}
    // </div>
    <div>
      <input />
    </div>
  );
};
