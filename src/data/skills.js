import { useTranslation } from 'react-i18next'
import {
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'
import { HiDatabase, HiSparkles, HiLightningBolt } from 'react-icons/hi'

export const skillsData = [
  {
    key: 'frontend',
    color: '#61dafb',
    items: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 88 },
      { name: 'Angular', icon: SiAngular, level: 85 },
    ],
  },
  {
    key: 'backend',
    color: '#68a063',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Express', icon: SiExpress, level: 90 },
      { name: 'NestJS', icon: SiNestjs, level: 88 },
      { name: 'Flask', icon: SiFlask, level: 80 },
      { name: 'Django', icon: SiDjango, level: 78 },
    ],
  },
  {
    key: 'languages',
    color: '#f7df1e',
    items: [
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'Python', icon: SiPython, level: 90 },
    ],
  },
  {
    key: 'databases',
    color: '#336791',
    items: [
      { name: 'SQL', icon: HiDatabase, level: 90 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 88 },
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 88 },
    ],
  },
  {
    key: 'cloud',
    color: '#8e44ad',
    items: [
      { name: 'Firebase', icon: SiFirebase, level: 85 },
      { name: 'n8n', icon: HiLightningBolt, level: 80 },
      { name: 'AI Agents', icon: HiSparkles, level: 85 },
    ],
  },
]

export const useSkills = () => {
  const { t } = useTranslation()
  return skillsData.map((cat) => ({
    ...cat,
    title: t(`skills.${cat.key}`),
  }))
}
