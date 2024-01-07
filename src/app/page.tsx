'use client';

import { Header } from "@/components/header";
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={`flex flex-col text-sm items-center justify-between h-dvh w-full md:text-base lg:text-lg xl:text-xl ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  )
}
