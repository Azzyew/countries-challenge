import { Regions } from "@/queries/types";
import Image from "next/image";

type CountryCardProps = {
  flagSrc: string;
  name: string;
  population: number;
  region: Regions;
  capital: string;
}

export function CountryCard({ flagSrc, name, population, region, capital }: CountryCardProps) {
  return (
    <div className="drop-shadow-md bg-white rounded-md text-base w-64 dark:bg-primary-300 xl:w-80 hover:bg-[#f5f5f5] dark:hover:bg-[#334351]">
      <Image src={flagSrc} width={0} height={0} alt={`${name}'s flag`} sizes="100%" className="rounded-t-md w-full h-60" loading='eager'/>
      <div className="p-6 space-y-2 h-[12.5rem]">
        <h1 className="font-bold text-xl pb-2">{name}</h1>
        <p className="font-semibold">Population: <span className="font-light">{population.toLocaleString()}</span></p>
        <p className="font-semibold">Region: <span className="font-light">{region}</span></p>
        <p className="font-semibold">Capital: <span className="font-light">{capital}</span></p>
      </div>
    </div>
  );
}