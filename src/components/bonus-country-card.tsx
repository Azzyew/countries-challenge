import { Country } from "@/queries/types";
import Image from "next/image";
import BorderContainer from "./border-container";
import BonusBorderContainer from "./bonus-border-container";

type BonusCountryCardProps = {
  countryData: Country;
}

export function BonusCountryCard({ countryData }: BonusCountryCardProps) {
  const currencyKey = Object.keys(countryData.currencies ?? {})[0];
  const nativeNameKey = Object.keys(countryData.name.nativeName ?? {})[0];

  return (
    <div className="w-64 h-[440px] perspective-150 relative group xl:w-80">
      <div
        className="backface-hidden absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out drop-shadow-md overflow-hidden bg-white rounded-md text-base
        dark:bg-primary-300 group-hover:transform group-hover:-rotate-y-180">
        <Image src={countryData.flags.png} width={0} height={0} alt={`${countryData.name.common}'s flag`} sizes="100%" className="w-full h-60" loading='eager'/>
        <div className="p-6 space-y-2 h-[12.5rem]">
          <h1 className="font-bold text-xl pb-2">{countryData.name.common}</h1>
          <p className="font-semibold">Population: <span className="font-light">{countryData.population.toLocaleString()}</span></p>
          <p className="font-semibold">Region: <span className="font-light">{countryData.region}</span></p>
          <p className="font-semibold">Capital: <span className="font-light">{countryData.capital}</span></p>
        </div>
      </div>

      <div
        className="backface-hidden absolute top-0 left-0 h-full w-full transition-all duration-500 ease-in-out drop-shadow-md overflow-hidden bg-white rounded-md text-base rotate-y-180
        dark:bg-primary-300 group-hover:rotate-0">
        <div className="p-6 space-y-3 h-[12.5rem] font-semibold">
          {countryData.name.nativeName &&
            <p>Native name: <span className="font-normal">{countryData.name.nativeName[nativeNameKey].common}</span></p>
          }
          <p>Population: <span className="font-normal">{countryData.population}</span></p>
          <p>Region: <span className="font-normal">{countryData.region}</span></p>
          <p>Sub region: <span className="font-normal">{countryData.subregion}</span></p>
          <p>Capital: <span className="font-normal">{countryData.capital}</span></p>
          <p>Top level domain: <span className="font-normal">{countryData.tld}</span></p>
          {countryData.currencies &&
            <div>Currencies: <span className="font-normal">{countryData.currencies[currencyKey].name}</span></div>
          }
          {countryData.languages &&
            <p>Languages: <span className="font-normal">{Object.values(countryData.languages).join(", ")}</span></p>
          }

          {countryData.borders &&
            <div>
              <span className="text-base lg:text-lg">Border countries: </span>
              <div className="flex flex-wrap mt-3 lg:mt-0 lg:ml-4">
                {countryData.borders.map((border, index) => (
                  <BonusBorderContainer key={index} border={border}/>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export function BonusCountryCardSkeleton() {
  return (
    <div
      role="progressbar"
      className="drop-shadow-md bg-white rounded-md w-64 h-[440px] animate-pulse dark:bg-primary-300 xl:w-80"
    >
    <div className="rounded-t-md w-full h-60 bg-[#f5f5f5] dark:bg-[#334351]"/>
      <div className="p-6 space-y-4 h-[12.5rem]">
        <div className="skeleton-text"/>
        <div className="skeleton-text"/>
        <div className="skeleton-text"/>
        <div className="skeleton-text"/>
      </div>
    </div>
  );
}
