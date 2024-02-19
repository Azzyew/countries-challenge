import { MoonStars, SunDim } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  //to fix the error 'Error: Text content does not match server-rendered HTML.'
  useEffect(() =>  setMounted(true), []);

  if (!mounted) return (
    <div className="w-full py-12 bg-white drop-shadow-md dark:bg-primary-300 md:px-8 lg:px-16 xl:px-20" />
  )

  return(
    <nav className="flex justify-between w-full px-4 py-8 bg-white drop-shadow-md dark:bg-primary-300 md:px-8 lg:px-16 xl:px-20">
      <h1 className="font-bold">Where in the world?</h1>
      {pathname === "/bonus"
      ? 
        <Link href="/" className="underline">Original version</Link>
      : 
        <Link href="/bonus" className="underline">See card animation version</Link>
      }
      <button
        className="flex items-center"
        aria-label={`Change mode to ${resolvedTheme === "dark" ? "light" : "dark"}`}
        onClick={() => {
          resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {resolvedTheme === "dark" ? (
          <>
            <SunDim className="mr-1" weight="bold" /> Light Mode
          </>
        ) : (
          <>
            <MoonStars className="mr-1" weight="bold" /> Dark Mode
          </>
        )}
      </button>
    </nav>
  )
}