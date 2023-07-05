import { LoadPokemon, Pokemon } from "../types/PokemonData";

// 20種類のポケモンデータを取ってくる
export const getAllPokemon = (url: string): Promise<LoadPokemon> => {
  //url === initialURL
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// 一つ一つの詳細なデータを取ってくる
export const getPokemon = (url: string): Promise<Pokemon> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        resolve(data);
      });
  });
};
