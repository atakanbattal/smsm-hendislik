import { Link } from 'react-router-dom'

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    to,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold transition-all rounded'

    const variants = {
        primary: 'bg-primary hover:bg-primary-hover text-background-dark btn-glow',
        secondary: 'bg-transparent border border-gray-500 hover:border-white text-white',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-background-dark',
    }

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-14 px-8 text-base',
    }

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (to) {
        return <Link to={to} className={combinedClassName} {...props}>{children}</Link>
    }

    if (href) {
        return <a href={href} className={combinedClassName} {...props}>{children}</a>
    }

    return <button className={combinedClassName} {...props}>{children}</button>
}

export function Card({ children, className = '', hover = true, ...props }) {
    return (
        <div
            className={`
        bg-surface-dark rounded-lg p-6 border border-[#333]
        ${hover ? 'card-hover hover:border-primary/50' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
}

export function ServiceCard({ icon, title, description, tag, className = '' }) {
    return (
        <div className={`
      group relative bg-slate-metallic rounded-lg p-6 border border-[#333] 
      hover:border-primary transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(212,175,53,0.15)] 
      flex flex-col h-full service-card
      ${className}
    `}>
            <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-2xl transition-colors">
                    {icon}
                </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{description}</p>
            {tag && (
                <div className="mt-auto pt-4 border-t border-[#333] flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">{tag}</span>
                    <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-sm">arrow_outward</span>
                </div>
            )}
        </div>
    )
}

export function Badge({ children, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-primary/10 border-primary/30 text-primary',
        secondary: 'bg-gray-500/10 border-gray-500/30 text-gray-400',
    }

    return (
        <span className={`
      inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider
      ${variants[variant]}
      ${className}
    `}>
            {children}
        </span>
    )
}

export function StatCard({ icon, value, label }) {
    return (
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#333] bg-surface-dark/50 backdrop-blur-sm hover:border-primary transition-colors group text-center">
            <div className="p-2 rounded-lg bg-[#333] w-fit mx-auto text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
        </div>
    )
}
