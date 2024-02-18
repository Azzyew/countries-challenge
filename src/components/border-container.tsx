import { useCountryQuery } from "@/queries/countries.query";
import Link from "next/link";

type BorderContainerProps = {
  border: string;
};

export default function BorderContainer({ border }: BorderContainerProps) {
  const { data, isLoading } = useCountryQuery({ code: border });

  if (isLoading || !data ) return;

  return (
    <Link
      className="px-6 py-1.5 w-32 mx-2 my-1 text-center font-normal drop-shadow-md rounded-sm cursor-pointer bg-white dark:bg-primary-300 hover:drop-shadow-xl hover:bg-[#f5f5f5] dark:hover:bg-[#334351]"
      href={`/${data[0].name.common}`}
    >
      {data[0].name.common}
    </Link>
  )
}