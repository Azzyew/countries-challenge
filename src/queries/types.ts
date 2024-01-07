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
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: Regions;
  capital: string;
};
