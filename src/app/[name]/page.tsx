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
  if (!data || isLoading) {
    //make skeleton
    return;
  }

  const currencyKey = Object.keys(data[0].currencies)[0];
  console.log(currencyKey);
  console.log(data[0].currencies.currencyKey)

  return (
    <main className={`flex flex-col text-sm items-center h-full w-full md:text-base lg:text-lg ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <button
        onClick={() => router.back()}
        className="flex items-center py-2 px-4 drop-shadow-md rounded-md w-22 bg-white dark:bg-primary-300"
      ><ArrowLeft className="mr-2"/> Back</button>
      <section className="flex flex-col mt-12">
        <Image src={data[0].flags.png} width={300} height={250} alt={`${data[0].name.common}'s flag`} className="rounded-t-md w-full h-full" loading='eager'/>

        <h1>{data[0].name.common}</h1>
        <p>Native name: {data[0].nativeName}</p>
        <p>Population: {data[0].population}</p>
        <p>Region: {data[0].region}</p>
        <p>Sub region: {data[0].subregion}</p>
        <p>Capital: {data[0].capital}</p>

        <p>Top level domain: {data[0].topLevelDomain}</p>
        <p>Currencies: {data[0].currencies[currencyKey].name}</p>
        <p>Languages: {data[0].languages}</p>

        <p>Border countries: {data[0].borders}</p>
      </section>
    </main>
  )
}
