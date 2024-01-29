export type Regions =
    "Africa"
    | "America"
    | "Asia"
    | "Europe"
    | "Oceania";

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
      }
    }
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: Regions;
  capital: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    }
  };
  languages: string[];
  borders: string[];
};
