import { Regions } from "@/queries/types";
import Image from "next/image";

type CountryCardProps = {
  flagSrc: string;
  name: string;
  population: number;
  region: Regions;
  capital: string;
}

export function CountryCard({flagSrc, name, population, region, capital}: CountryCardProps) {
  return (
    <div className="drop-shadow-md bg-white rounded-md w-64 dark:bg-primary-300">
      <Image src={flagSrc} width={256} height={256} alt={`${name}'s flag`} className="rounded-t-md w-auto h-auto" loading='eager'/>
      <div className="p-6 space-y-2">
        <h1 className="font-bold text-base pb-2">{name}</h1>
        <p className="font-semibold">Population: <span className="font-light">{population.toLocaleString()}</span></p>
        <p className="font-semibold">Region: <span className="font-light">{region}</span></p>
        <p className="font-semibold">Capital: <span className="font-light">{capital}</span></p>
      </div>
    </div>
  );
}