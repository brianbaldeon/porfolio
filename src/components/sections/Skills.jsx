import { useTranslation } from 'react-i18next'
import SectionTitle from '../ui/SectionTitle'
import { useSkills } from '../../data/skills'
import { useIntersection } from '../../hooks/useIntersection'

const Skills = () => {
  const { t } = useTranslation()
  const categories = useSkills()
  const [ref, visible] = useIntersection()

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-cloud text-primary dark:bg-primary dark:text-cloud"
    >
      <div className="container-custom section-padding" ref={ref}>
        <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />

        <div
          className={`flex flex-col gap-12 transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {categories.map((category) => (
            <div key={category.key}>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: category.color,
                    boxShadow: `0 0 12px ${category.color}80`,
                  }}
                />
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary dark:text-cloud">
                  {category.title}
                </h3>
                <div className="ml-2 h-px flex-1 bg-gradient-to-r from-slate-gray/40 to-transparent dark:from-cloud/20" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-gray/20 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow-accent dark:border-cloud/10 dark:bg-cloud/5"
                    >
                      <Icon
                        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: category.color }}
                      />
                      <span className="text-center text-sm font-semibold text-primary dark:text-cloud">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
