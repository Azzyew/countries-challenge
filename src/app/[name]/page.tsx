'use client';

import { useCountryQuery } from "@/queries/countries.query"
import { Header } from "@/components/header";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import BorderContainer from "@/components/border-container";

export default function CountryDetails({ params }: { params: { name: string } }) {
  const router = useRouter();

  const { data, isLoading } = useCountryQuery({ name: params.name });
  
  if (!data || isLoading) {
    //make skeleton
    return;
  }

  const currencyKey = Object.keys(data[0].currencies)[0];
  const nativeNameKey = Object.keys(data[0].name.nativeName)[0];

  return (
    <main className={`flex flex-col text-sm min-h-dvh w-full md:text-base lg:text-lg`}>
      <Header />
      <section className="px-6 md:px-8 lg:px-16 xl:px-20 lg:py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm py-1 mt-4 drop-shadow-md rounded-sm w-24 bg-white dark:bg-primary-300 hover:bg-[#f5f5f5] dark:hover:bg-[#334351]"
        >
          <ArrowLeft size={12} className="mx-4"/> Back
        </button>
        
        <section className="flex flex-col mt-12 font-semibold lg:flex-row lg:justify-between lg:mt-16">
          <Image
            src={data[0].flags.png}
            width={0}
            height={0}
            alt={`${data[0].name.common}'s flag`}
            sizes="100%"
            className="rounded-t-md w-full h-full lg:h-[25rem] lg:w-2/5"
            loading="eager"
            quality={100}
          />

          <div className="xl:w-[40%]">
            <h1 className="font-extrabold text-lg mt-8 lg:text-3xl">{data[0].name.common}</h1>

            <div className="lg:flex lg:flex-row lg:justify-between lg:mt-2">
              <div className="mt-4 space-y-2">
                {data[0].name.nativeName &&
                  <p>Native name: <span className="font-normal">{data[0].name.nativeName[nativeNameKey].common}</span></p>
                }
                <p>Population: <span className="font-normal">{data[0].population}</span></p>
                <p>Region: <span className="font-normal">{data[0].region}</span></p>
                <p>Sub region: <span className="font-normal">{data[0].subregion}</span></p>
                <p>Capital: <span className="font-normal">{data[0].capital}</span></p>
              </div>

              <div className="mt-8 space-y-2 lg:mt-4">
                <p>Top level domain: <span className="font-normal">{data[0].tld}</span></p>
                <p>Currencies: <span className="font-normal">{data[0].currencies[currencyKey].name}</span></p>
                <p>Languages: <span className="font-normal">{Object.values(data[0].languages).join(", ")}</span></p>
              </div>
            </div>

            <div className="mt-8 lg:mt-16">
              {data[0].borders &&
                <div className="lg:flex lg:items-center">
                  <span className="text-base lg:text-lg">Border countries: </span>
                  <div className="flex flex-wrap mt-3 lg:mt-0 lg:ml-4">
                    {data[0].borders.map((border, index) => (
                      <BorderContainer key={index} border={border}/>
                    ))}
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
