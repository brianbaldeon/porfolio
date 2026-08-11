const variants = {
  primary:
    'bg-white text-primary hover:bg-cloud shadow-soft-white focus:ring-offset-primary dark:focus:ring-offset-primary',
  secondary:
    'border-2 border-primary text-primary hover:bg-primary/5 hover:shadow-soft focus:ring-offset-cloud dark:border-silver/40 dark:text-cloud dark:hover:bg-silver/10 dark:hover:border-silver/70 dark:hover:shadow-soft-white',
  ghost:
    'text-primary hover:bg-cloud/10 dark:text-cloud dark:hover:bg-cloud/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-silver ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5" />}
    </button>
  )
}

export default Button
