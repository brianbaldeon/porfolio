import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { projectsData } from '../../data/projects'
import { useIntersection } from '../../hooks/useIntersection'

const Projects = () => {
  const { t } = useTranslation()
  const [ref, visible] = useIntersection()

  return (
    <section id="projects" className="scroll-mt-20 bg-cloud py-20 text-primary dark:bg-primary-light dark:text-cloud md:py-28">
      <div className="container-custom section-padding" ref={ref}>
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div
          className={`grid gap-6 transition-all duration-1000 md:grid-cols-2 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {projectsData.map((project) => {
            const item = t(`projects.items.${project.id}`, { returnObjects: true })
            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-accent dark:bg-primary/80 dark:backdrop-blur-sm"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-all group-hover:opacity-50"
                  style={{ backgroundColor: project.color }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="rounded-lg p-2.5"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke={project.color}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-gray transition-colors hover:text-accent dark:text-slate-light"
                        aria-label="Repository"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-gray transition-colors hover:text-accent dark:text-slate-light"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-primary dark:text-cloud">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-gray dark:text-slate-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
