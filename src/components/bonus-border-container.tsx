import { useCountryQuery } from "@/queries/countries.query";
import Link from "next/link";

type BonusBorderContainerProps = {
  border: string;
};

export default function BonusBorderContainer({ border }: BonusBorderContainerProps) {
  const { data, isLoading } = useCountryQuery({ code: border });

  if (isLoading || !data ) return;

  return (
    <Link
      className="px-2 text-center font-normal drop-shadow-md rounded-sm cursor-pointer bg-white dark:bg-primary-300 hover:underline hover:bg-[#f5f5f5] dark:hover:bg-[#334351]"
      href={`/${data[0].name.common}`}
    >
      {data[0].name.common}
    </Link>
  )
}