import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { sendContactEmail } from '../../utils/emailjs'
import { useIntersection } from '../../hooks/useIntersection'

const Contact = () => {
  const { t } = useTranslation()
  const [ref, visible] = useIntersection()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const whatsapp = import.meta.env.VITE_WHATSAPP
  const github = import.meta.env.VITE_GITHUB_URL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendContactEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-cloud py-20 text-primary dark:bg-primary-light dark:text-cloud md:py-28">
      <div className="container-custom section-padding" ref={ref}>
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div
          className={`mx-auto grid max-w-5xl gap-10 transition-all duration-1000 md:grid-cols-5 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:col-span-3"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-primary dark:text-cloud">
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.name_placeholder')}
                required
                className="w-full rounded-xl border border-slate-gray/30 bg-white px-4 py-3 text-primary placeholder:text-slate-gray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-cloud/20 dark:bg-primary/60 dark:text-cloud"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-primary dark:text-cloud">
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.email_placeholder')}
                required
                className="w-full rounded-xl border border-slate-gray/30 bg-white px-4 py-3 text-primary placeholder:text-slate-gray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-cloud/20 dark:bg-primary/60 dark:text-cloud"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-primary dark:text-cloud">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.message_placeholder')}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-gray/30 bg-white px-4 py-3 text-primary placeholder:text-slate-gray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-cloud/20 dark:bg-primary/60 dark:text-cloud"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === 'sending'}
              className="w-full"
              icon={status === 'sending' ? null : HiMail}
            >
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </Button>

            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 p-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <HiCheckCircle className="h-5 w-5" />
                {t('contact.success')}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-xl bg-red-500/15 p-3 text-sm font-medium text-red-600 dark:text-red-400">
                <HiExclamationCircle className="h-5 w-5" />
                {t('contact.error')}
              </div>
            )}
          </form>

          <div className="flex flex-col justify-center gap-3 md:col-span-2">
            <p className="text-center text-sm text-slate-gray dark:text-slate-light">
              {t('contact.or')}
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-4 py-4 text-white shadow-soft transition-all hover:-translate-y-1 hover:bg-emerald-600"
            >
              <FaWhatsapp className="h-6 w-6 flex-shrink-0" />
              <span className="text-base font-bold">{t('contact.whatsapp')}</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#24292e] px-4 py-4 text-white shadow-soft transition-all hover:-translate-y-1 hover:bg-[#1b1f23]"
            >
              <FaGithub className="h-6 w-6 flex-shrink-0" />
              <span className="text-base font-bold">GitHub</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-4 py-4 text-white shadow-soft transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              <FaLinkedin className="h-6 w-6 flex-shrink-0" />
              <span className="text-base font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
