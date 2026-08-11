import { useTranslation } from 'react-i18next'
import { HiBriefcase } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { experienceData } from '../../data/experience'
import { useIntersection } from '../../hooks/useIntersection'

const Experience = () => {
  const { t } = useTranslation()
  const [ref, visible] = useIntersection()

  return (
    <section id="experience" className="scroll-mt-20 bg-cloud text-primary dark:bg-primary dark:text-cloud">
      <div className="container-custom section-padding" ref={ref}>
        <SectionTitle title={t('experience.title')} subtitle={t('experience.subtitle')} />

        <div
          className={`relative mx-auto max-w-3xl transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-premium to-accent md:left-1/2 md:-translate-x-1/2" />

          {experienceData.map((exp, index) => {
            const item = t(`experience.items.${exp.id}`, { returnObjects: true })
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                className={`relative mb-10 flex items-center md:mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent shadow-glow-accent md:left-1/2">
                  <HiBriefcase className="h-4 w-4 text-cloud" />
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="group rounded-2xl border border-slate-gray/20 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 dark:border-cloud/10 dark:bg-cloud/5 dark:backdrop-blur-sm">
                    <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-primary dark:text-cloud">{item.role}</h3>
                    <p className="mb-2 text-sm font-medium text-slate-gray dark:text-slate-light">{item.company}</p>
                    <p className="text-sm leading-relaxed text-slate-gray dark:text-slate-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
