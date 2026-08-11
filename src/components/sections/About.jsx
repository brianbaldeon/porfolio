import { useTranslation } from 'react-i18next'
import { HiCode, HiLightBulb, HiTrendingUp } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { useIntersection } from '../../hooks/useIntersection'

const stats = (t) => [
  { value: '20+', label: t('about.stat_projects'), icon: HiCode },
  { value: '3+', label: t('about.stat_years'), icon: HiTrendingUp },
  { value: '15+', label: t('about.stat_techs'), icon: HiLightBulb },
]

const About = () => {
  const { t } = useTranslation()
  const [ref, visible] = useIntersection()

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-cloud text-primary dark:bg-primary-light dark:text-cloud"
    >
      <div className="container-custom section-padding" ref={ref}>
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />

        <div
          className={`grid gap-10 transition-all duration-1000 md:grid-cols-2 md:items-center ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-slate-gray dark:text-slate-light md:text-lg">
              {t('about.p1')}
            </p>
            <p className="text-base leading-relaxed text-slate-gray dark:text-slate-light md:text-lg">
              {t('about.p2')}
            </p>
            <p className="text-base leading-relaxed text-slate-gray dark:text-slate-light md:text-lg">
              {t('about.p3')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats(t).map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl border border-slate-gray/20 bg-white p-4 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 dark:border-cloud/10 dark:bg-cloud/5"
                >
                  <s.icon className="mx-auto mb-2 h-7 w-7 text-accent transition-transform group-hover:scale-110" />
                  <div className="text-2xl font-extrabold text-primary dark:text-cloud md:text-3xl">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-gray dark:text-slate-light md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-premium/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { tech: 'React', color: '#61dafb' },
                { tech: 'Node.js', color: '#3c873a' },
                { tech: 'Python', color: '#3776ab' },
                { tech: 'PostgreSQL', color: '#336791' },
                { tech: 'MongoDB', color: '#47a248' },
                { tech: 'Firebase', color: '#ffca28' },
              ].map((item) => (
                <div
                  key={item.tech}
                  className="group flex items-center gap-3 rounded-xl border border-slate-gray/20 bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 dark:border-cloud/10 dark:bg-cloud/5"
                >
                  <span
                    className="h-3 w-3 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-mono text-sm text-primary dark:text-cloud">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
