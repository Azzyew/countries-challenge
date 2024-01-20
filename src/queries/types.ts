export type Regions =
    "Africa"
    | "America"
    | "Asia"
    | "Europe"
    | "Oceania";

export type Country = {
  nativeName: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: Regions;
  capital: string;
  subregion: string;
  topLevelDomain: string;
  currencies: any;
  languages: string[];
  borders: string[];
};
