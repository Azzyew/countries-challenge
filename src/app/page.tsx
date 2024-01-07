'use client';

import { CountryCard } from "@/components/country-card";
import { Header } from "@/components/header";
import { CountriesQuery } from "@/queries/countries.query";
import { Country } from "@/queries/types";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { data, isLoading } = CountriesQuery.getAllCountries();

  if (isLoading) {
    return;
  }

  return (
    <main className={`flex flex-col text-sm items-center h-full w-full md:text-base lg:text-lg xl:text-xl ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {data.map((country: Country) => (
        <div key={country.name.common} className="mt-4 py-4">
          <CountryCard
            flagSrc={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </div>
      ))}
    </main>
  )
}
