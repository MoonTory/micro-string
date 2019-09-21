import { useEffect, useRef } from 'react'

export function useNavbarScroll() {
  const navEl = useRef<HTMLElement>(null)

  const handleScroll = () => {
    if (navEl.current != null) {
      if (window.scrollY > 50) {
        navEl.current.classList.add('scroll')
      } else {
        navEl.current.classList.remove('scroll')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return navEl
}
