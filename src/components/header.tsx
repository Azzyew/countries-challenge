import { MoonStars, SunDim } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();

  return(
    <nav className="flex justify-between w-full px-4 py-8 bg-white drop-shadow-md dark:bg-primary-300 md:px-8 lg:px-16 xl:px-20">
      <h1 className="font-bold">Where in the world?</h1>
      {resolvedTheme === 'dark' && 
        <button className="flex items-center" onClick={() => setTheme('light')}>
          <SunDim className="mr-1" weight="bold"/> Light Mode
        </button>
      }
      {resolvedTheme === 'light' && 
        <button className="flex items-center" onClick={() => setTheme('dark')}>
          <MoonStars className="mr-1" weight="bold"/> Dark Mode
        </button>
      }
    </nav>
  )
}