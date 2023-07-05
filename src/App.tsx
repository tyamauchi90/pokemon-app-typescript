import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card, { Pokemon } from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App(): JSX.Element {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<Array<Pokemon>>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res: Array<LoadPokemon> = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // console.log(res.results);
      console.log(res);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: Array<{ name: string; url: string }>) => {
    //res.results === data
    let _pokemonData = await Promise.all(
      //Promise.allの中には配列を入れる
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    // console.log(data);
    await loadPokemon(data.results);
    setNextUrl(data.next); //nextUrlが更新される
    setPrevUrl(data.previous); //prevUrlが更新される
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    // console.log(data);
    await loadPokemon(data.results);
    setNextUrl(data.next); //nextUrlが更新される
    setPrevUrl(data.previous); //prevUrlが更新される
    setLoading(false);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
