<<<<<<< HEAD
# Brian Baldeón - Portfolio

SPA personal construida con **React + Vite + Tailwind CSS**, lista para desplegar en **Vercel**.

## 🎨 Paleta de Colores

| Variable | Color | Uso |
|---|---|---|
| Primary | `#34495e` | Background principal |
| Cloud | `#ecf0f1` | Cards y texto |
| Accent | `#d35400` | CTAs y highlights |
| Slate Gray | `#7f8c8d` | Texto secundario |
| Premium | `#8e44ad` | Badges y acentos premium |

## 🚀 Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (paleta personalizada)
- **react-i18next** (ES/EN)
- **react-icons** (Simple Icons + Hi + Hi2)
- **@emailjs/browser** (formulario de contacto)
- **Intersection Observer** (animaciones on-scroll)

## 📁 Estructura

```
src/
├── assets/         # Foto-CV.jpg
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/         # Button, Card, SectionTitle
├── context/        # ThemeContext (dark/light)
├── data/           # skills, projects, experience
├── hooks/          # useIntersection
├── i18n/           # ES/EN locales
├── utils/          # emailjs wrapper
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Configuración

1. **Clonar e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   ```
   Completar con tus credenciales de EmailJS y datos personales.

3. **EmailJS** (para el formulario):
   - Crear cuenta en [emailjs.com](https://www.emailjs.com/)
   - Crear un Service (Gmail, Outlook, etc.)
   - Crear un Template con variables: `from_name`, `from_email`, `message`
   - Copiar Service ID, Template ID y Public Key al `.env`

4. **Desarrollo:**
   ```bash
   npm run dev
   ```

5. **Build de producción:**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en Vercel

### Opción 1: CLI
```bash
npm install -g vercel
vercel          # primer deploy
vercel --prod   # producción
```

### Opción 2: Git + Vercel Dashboard
1. Push a GitHub/GitLab/Bitbucket
2. Importar proyecto en [vercel.com/new](https://vercel.com/new)
3. Framework Preset: **Vite**
4. Agregar variables de entorno en Settings → Environment Variables
5. Deploy 🚀

`vercel.json` ya incluye la configuración de rewrites SPA necesaria.

## ✏️ Personalización

Editá los siguientes archivos:

- **`src/data/skills.js`** → añadir/quitar tecnologías
- **`src/data/projects.js`** → tus proyectos reales
- **`src/data/experience.js`** → tu experiencia
- **`src/i18n/locales/es.json` y `en.json`** → textos
- **`src/assets/Foto-CV.jpg`** → reemplazá tu foto

## 📞 Contacto

- **GitHub**: [@brianbaldeon](https://github.com/brianbaldeon)
- **LinkedIn**: [brian-baldeon](https://www.linkedin.com/in/brian-baldeon/)
- **WhatsApp**: +54 11 3123 2271

---

Construido con React + Vite + Tailwind 💙
=======
# porfolio
>>>>>>> 56eebf2ab0f86e84525c67c1989851421ab86ad3
