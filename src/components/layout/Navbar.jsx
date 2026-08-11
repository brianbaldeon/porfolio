import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

const NavLink = ({ href, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative w-full px-3 py-3 text-base font-medium text-primary transition-colors hover:text-primary-light md:w-auto md:py-2 md:text-sm dark:text-cloud dark:hover:text-cloud/80"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full md:left-1/2 dark:bg-cloud" />
    </a>
  )
}

const LangToggle = ({ onClick }) => {
  const { i18n } = useTranslation()
  const toggle = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    onClick?.()
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-slate-gray/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/5 dark:border-silver/40 dark:text-cloud dark:hover:border-silver dark:hover:bg-silver/10"
      aria-label="Toggle language"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  )
}

const ThemeToggle = ({ onClick }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={() => {
        toggleTheme()
        onClick?.()
      }}
      className="rounded-full p-2 text-primary transition-all hover:bg-primary/5 dark:text-cloud dark:hover:bg-cloud/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
    </button>
  )
}

const Navbar = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setOpen(false)

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled || open
            ? 'bg-cloud/95 border-slate-gray/20 shadow-lg backdrop-blur-md dark:bg-primary-dark/95 dark:border-silver/15 dark:shadow-2xl'
            : 'bg-cloud/85 border-slate-gray/15 backdrop-blur-sm dark:bg-primary/90 dark:border-silver/10'
        }`}
      >
        <div className="container-custom flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMenu()
            }}
            className="group flex items-center gap-2 text-xl font-extrabold text-primary dark:text-cloud"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary shadow-soft transition-transform group-hover:rotate-12 dark:shadow-soft-white">
              B
            </span>
            <span className="hidden text-sm font-bold tracking-tight sm:inline md:text-base">Dev. Lic. Baldeón</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-primary dark:text-cloud md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-slate-gray/15 bg-cloud px-4 py-2 dark:border-silver/10 dark:bg-primary-dark">
            <nav className="flex flex-col">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} onClick={closeMenu}>
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-2 flex items-center justify-center gap-3 border-t border-slate-gray/10 py-3 dark:border-silver/10">
              <LangToggle onClick={closeMenu} />
              <ThemeToggle onClick={closeMenu} />
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navbar
