/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#d4af35",
                "primary-hover": "#b8962a",
                "primary-light": "#edbc1d",
                "background-dark": "#121212",
                "surface-dark": "#1e1e1e",
                "surface-light": "#2a2f35",
                "slate-metallic": "#2a2f35",
                "text-gold": "#c9bc92",
                "border-slate": "#333333",
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
                sans: ["Manrope", "sans-serif"],
            },
            backgroundImage: {
                "metallic-gradient": "linear-gradient(145deg, #2a2f35 0%, #1e1e1e 100%)",
                "gold-gradient": "linear-gradient(135deg, #d4af35 0%, #b8962a 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "slide-up": "slideUp 0.5s ease-out",
                "bounce-slow": "bounce 3s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
}
