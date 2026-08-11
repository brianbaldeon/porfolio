const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 text-center md:mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
        {subtitle}
      </p>
      <h2
        className={`text-3xl font-extrabold md:text-5xl ${
          light ? 'text-primary' : 'text-primary dark:text-cloud'
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-premium" />
    </div>
  )
}

export default SectionTitle
