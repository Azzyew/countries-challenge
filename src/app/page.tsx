'use client';

import { Header } from "@/components/header";
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={`flex flex-col text-sm items-center justify-between h-dvh w-full ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  )
}
