import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') : ''
  )
  const activeTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    const switchTheme = () => {
      root.classList.remove(activeTheme)
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    }

    if (!document.startViewTransition) {
      switchTheme()
    } else {
      document.startViewTransition(switchTheme)
    }
  }, [theme, activeTheme])

  return [activeTheme, setTheme]
}

export default useThemeSwitcher
