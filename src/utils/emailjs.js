import emailjs from '@emailjs/browser'

export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
    throw new Error('EmailJS no está configurado. Revisa .env.example')
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
}
