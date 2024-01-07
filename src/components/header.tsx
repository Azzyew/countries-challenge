import { MoonStars, SunDim } from "@phosphor-icons/react/dist/ssr";

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({darkMode, toggleDarkMode}: HeaderProps) {
  return(
    <nav className="flex justify-between w-full px-4 py-8 bg-white drop-shadow-md dark:bg-primary-300">
      <h1 className="font-bold">Where in the world?</h1>
      <button className="flex items-center" onClick={toggleDarkMode}>
        {darkMode ? 
          (<>
            <SunDim className="mr-1"/> Light Mode
          </>) :
          (<>
            <MoonStars className="mr-1"/> Dark Mode
          </>)
        }
      </button>
    </nav>
  )
}