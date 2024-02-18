'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CountryCard, CountryCardSkeleton } from "@/components/country-card";
import { Header } from "@/components/header";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useCountryQuery } from "@/queries/countries.query";
import { Country, Regions } from "@/queries/types";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Home() {
  const [searchName, setSearchName] = useState('');
  const [searchRegion, setSearchRegion] = useState<Regions>();

  const router = useRouter();

  const debouncedSearchName = useDebounceValue(searchName);

  const { data, isLoading } = useCountryQuery({ name: debouncedSearchName, region: searchRegion });

  const handleSearchByName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleSearchByRegion = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchRegion(e.target.value as Regions);
  };

  return (
    <main className={`flex flex-col text-sm items-center h-full w-full md:text-base lg:text-lg`}>
      <Header />
      <form className="px-4 w-full md:px-8 lg:px-16 lg:flex lg:items-center lg:justify-between xl:px-20" onSubmit={(e) => e.preventDefault()}>
        <div className="mt-5 flex bg-white rounded-md h-14 p-2 items-center drop-shadow-md dark:bg-primary-300 lg:w-1/3">
          <input
            className="grow border-none bg-white dark:bg-primary-300 focus:outline-none"
            onChange={handleSearchByName}
            placeholder="Search for a country..."
            aria-label="Country name"
          />
          <div><MagnifyingGlass weight="bold" /></div>
        </div>
        <select
          className="mt-8 p-4 rounded-md drop-shadow-md bg-white dark:bg-primary-300 lg:mt-5 hover:bg-[#f5f5f5] dark:hover:bg-[#334351]"
          onChange={handleSearchByRegion}
          aria-label="Country by region"
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      {isLoading ? 
        <section className="h-dvh flex flex-col mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12 xl:gap-24">
          <CountryCardSkeleton />
          <CountryCardSkeleton />
          <CountryCardSkeleton />
          <CountryCardSkeleton />
        </section>
      :
        <section className="flex flex-col mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12 xl:gap-24">
          {data?.map((country: Country) => (
            <div key={country.name.common} onClick={() => router.push(`/${country.name.common}`)} >
              <CountryCard
                flagSrc={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </div>
          ))}
        </section>
      }
    </main>
  )
}
