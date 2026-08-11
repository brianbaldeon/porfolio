import { useTranslation } from 'react-i18next'
import { HiArrowRight, HiMail, HiSparkles } from 'react-icons/hi'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import Button from '../ui/Button'
import FotoCV from '../../assets/Foto-CV.jpg'

const Hero = () => {
  const { t } = useTranslation()
  const whatsapp = import.meta.env.VITE_WHATSAPP
  const github = import.meta.env.VITE_GITHUB_URL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cloud pt-20 pb-12 dark:bg-primary sm:pt-24 md:pt-28 scroll-mt-20"
    >
      <div className="absolute inset-0 -z-10 bg-cloud dark:bg-primary" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl dark:bg-cloud/10" />
        <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-azure/15 blur-3xl dark:bg-cloud/5" />
      </div>

      <div className="container-custom flex flex-col items-center justify-center gap-6 px-5 sm:px-6 md:flex-row md:gap-16 md:px-12 lg:px-20">
        <div className="relative animate-fade-in">
          <div className="absolute -inset-3 animate-float rounded-full bg-primary/10 blur-2xl dark:bg-white/10" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/0 via-primary/30 to-primary/0 dark:from-white/0 dark:via-white/30 dark:to-white/0" />
          <img
            src={FotoCV}
            alt="Brian Baldeón"
            className="relative h-48 w-48 rounded-full border-2 border-primary/30 object-cover shadow-soft sm:h-56 sm:w-56 md:h-72 md:w-72 dark:border-white/20 dark:shadow-soft-white"
            loading="eager"
          />
        </div>

        <div className="animate-fade-up w-full max-w-xl text-center md:text-left">
          <p className="mb-2 text-base font-medium text-slate-gray sm:text-lg dark:text-silver md:text-xl">
            {t('hero.greeting')}
          </p>
          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-primary drop-shadow-[0_0_25px_rgba(52,73,94,0.25)] sm:text-5xl dark:text-white dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] md:text-6xl">
            <span>{t('hero.name')}</span>
          </h1>
          <h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-primary sm:text-xl dark:text-cloud md:justify-start md:text-2xl">
            <HiSparkles className="h-5 w-5 flex-shrink-0 text-slate-gray dark:text-silver" />
            <span>{t('hero.role')}</span>
          </h2>
          <p className="mb-8 text-base text-slate-gray dark:text-silver/80 md:text-lg">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              icon={HiArrowRight}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              {t('hero.cta_projects')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={HiMail}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              {t('hero.cta_contact')}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-gray/40 p-3 text-primary transition-all hover:-translate-y-1 hover:border-primary hover:shadow-soft dark:border-silver/30 dark:text-cloud dark:hover:border-cloud dark:hover:shadow-soft-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-gray/40 p-3 text-primary transition-all hover:-translate-y-1 hover:border-primary hover:shadow-soft dark:border-silver/30 dark:text-cloud dark:hover:border-cloud dark:hover:shadow-soft-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-gray/40 p-3 text-primary transition-all hover:-translate-y-1 hover:border-primary hover:shadow-soft dark:border-silver/30 dark:text-cloud dark:hover:border-cloud dark:hover:shadow-soft-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
