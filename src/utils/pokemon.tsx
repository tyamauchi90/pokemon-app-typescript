// type LoadPokemon = {
//   next?: string;
//   previous?: string;
//   results: {
//     name: string;
//     url: string;
//   };
// };

// 20種類のポケモンデータを取ってくる
export const getAllPokemon = (url: string) => {
  //url === initialURL
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// 一つ一つの詳細なデータを取ってくる
export const getPokemon = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        resolve(data);
      });
  });
};
