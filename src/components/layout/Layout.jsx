import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from '../WhatsAppButton'

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />

            {/* WhatsApp floating button */}
            <WhatsAppButton phoneNumber="905320000000" />
        </div>
    )
}
