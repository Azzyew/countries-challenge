'use client';

import { CountryCard } from "@/components/country-card";
import { Header } from "@/components/header";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useCountryQuery } from "@/queries/countries.query";
import { Country, Regions } from "@/queries/types";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
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

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  if (isLoading) {
    //make skeleton
    return;
  }

  return (
    <main className={`flex flex-col text-sm items-center h-full w-full md:text-base lg:text-lg ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <form className="px-4 w-full" onSubmit={(e) => e.preventDefault()}>
        <div className="mt-5 flex bg-white rounded-md h-10 p-2 items-center drop-shadow-md dark:bg-primary-300">
          <input className="grow border-none bg-white dark:bg-primary-300 focus:outline-none" onChange={handleSearchByName} placeholder="Search for a country..." />
          <div><MagnifyingGlass weight="bold" /></div>
        </div>
        <select className="mt-8 p-4 rounded-md drop-shadow-md bg-white dark:bg-primary-300" onChange={handleSearchByRegion} >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
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
    </main>
  )
}
