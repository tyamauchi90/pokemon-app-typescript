export type LoadPokemon = {
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type Pokemon = {
  sprites: {
    front_default: string;
  };
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
};
