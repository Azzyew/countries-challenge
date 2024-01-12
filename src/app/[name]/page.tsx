'use client';

import { useState } from "react";

import { useCountryQuery } from "@/queries/countries.query"
import { Header } from "@/components/header";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";

export default function CountryDetails({ params }: { params: { name: string } }) {
  const [darkMode, setDarkMode] = useState(true);

  const router = useRouter();

  const { data, isLoading } = useCountryQuery({ name: params.name });
  
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
      <button
        onClick={() => router.back()}
        className="flex items-center py-2 px-4 drop-shadow-md rounded-md w-22 bg-white dark:bg-primary-300"
      ><ArrowLeft className="mr-2"/> Back</button>
      <section className="flex flex-col mt-12">
        {/* {data.map((country: Country) => (
          <div key={country.name.common} onClick={() => router.push(`/${country.name.common}`)} >
            <CountryCard
              flagSrc={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))} */}
        <Image src={data[0].flags.png} width={300} height={250} alt={`${data[0].name.common}'s flag`} className="rounded-t-md w-full h-full" loading='eager'/>

        <h1>Name</h1>
        <p>Native name:</p>
        <p>Population: </p>
        <p>Region: </p>
        <p>Sub region: </p>
        <p>Capital: </p>

        <p>Top level domain: </p>
        <p>Currencies: </p>
        <p>Languages: </p>

        <p>Border countries: </p>
      </section>
    </main>
  )
}
