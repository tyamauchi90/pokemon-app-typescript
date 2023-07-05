// 20種類のポケモンデータを取ってくる
export const getAllPokemon = (url) => { //url === initialURL
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => res.json()).then((data) => resolve(data));
  })
};

// 一つ一つの詳細なデータを取ってくる
export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => res.json()).then((data) => {
      // console.log(data);
      resolve(data)
    }
    );
  });
};