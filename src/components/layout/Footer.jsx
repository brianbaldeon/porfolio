import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const github = import.meta.env.VITE_GITHUB_URL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const whatsapp = import.meta.env.VITE_WHATSAPP

  const links = [
    { href: github, icon: FaGithub, label: 'GitHub' },
    { href: whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
    { href: linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="border-t border-slate-gray/15 bg-cloud py-10 text-primary dark:border-cloud/10 dark:bg-primary-dark dark:text-cloud">
      <div className="container-custom flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span>© {year} Brian Baldeón.</span>
          <span className="text-slate-gray dark:text-slate-light">· {t('footer.rights')}</span>
        </div>

        <div className="flex gap-4">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full bg-slate-gray/10 p-3 text-primary transition-all hover:-translate-y-1 hover:bg-accent hover:text-cloud dark:bg-cloud/5 dark:text-cloud"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1 text-xs text-slate-gray dark:text-slate-light">
          {t('footer.built')} <HiHeart className="h-3.5 w-3.5 text-accent" />
        </p>
      </div>
    </footer>
  )
}

export default Footer
