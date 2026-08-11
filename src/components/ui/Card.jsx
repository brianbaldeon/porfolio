const Card = ({ children, className = '', glow = false }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-accent dark:bg-primary/80 dark:text-cloud ${glow ? 'border border-accent/30' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
