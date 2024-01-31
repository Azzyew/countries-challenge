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

export function CountryCardSkeleton() {
  return (
    <div className="drop-shadow-md bg-white rounded-md w-64 h-[440px] animate-pulse dark:bg-primary-300 xl:w-80">
    <div className="rounded-t-md w-full h-60 bg-[#f5f5f5] dark:bg-[#334351]"/>
      <div className="p-6 space-y-4 h-[12.5rem]">
        <div className="h-5 pb-2 w-full bg-[#f5f5f5] dark:bg-[#334351]"/>
        <div className="h-5 w-full bg-[#f5f5f5] dark:bg-[#334351]"/>
        <div className="h-5 w-full bg-[#f5f5f5] dark:bg-[#334351]"/>
        <div className="h-5 w-full bg-[#f5f5f5] dark:bg-[#334351]"/>
      </div>
    </div>
  );
}
