import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { path: '/', label: 'Ana Sayfa' },
        { path: '/hizmetler', label: 'Hizmetler' },
        { path: '/hakkimizda', label: 'Hakkımızda' },
        { path: '/referanslar', label: 'Referanslar' },
        { path: '/galeri', label: 'Galeri' },
        { path: '/sss', label: 'S.S.S.' },
        { path: '/kariyer', label: 'Kariyer' },
        { path: '/iletisim', label: 'İletişim' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#333] bg-background-dark/95 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-background-dark">
                            <span className="material-symbols-outlined text-3xl">engineering</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold tracking-tight text-white leading-none">SMS İNOVASYON</h1>
                            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Mühendislik</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-end gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/iletisim"
                            className="ml-4 flex items-center justify-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-bold text-background-dark transition hover:bg-primary-hover btn-glow"
                        >
                            <span>Teklif Al</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[#333] animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-sm font-medium px-4 py-2 rounded transition-colors ${isActive
                                            ? 'text-primary bg-primary/10'
                                            : 'text-gray-300 hover:text-primary hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link
                                to="/iletisim"
                                onClick={() => setIsMenuOpen(false)}
                                className="mx-4 mt-2 flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-sm font-bold text-background-dark"
                            >
                                <span>Teklif Al</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
