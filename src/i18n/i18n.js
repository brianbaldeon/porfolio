import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language

  const stored = localStorage.getItem('lang')
  if (stored) {
    localStorage.removeItem('lang')
  }
}

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    document.documentElement.lang = lng
  }
})

export default i18n
