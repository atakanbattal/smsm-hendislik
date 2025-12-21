import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import References from './pages/References'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Chatbot from './components/Chatbot'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hizmetler" element={<Services />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/referanslar" element={<References />} />
                    <Route path="/galeri" element={<Gallery />} />
                    <Route path="/sss" element={<FAQ />} />
                    <Route path="/kariyer" element={<Career />} />
                    <Route path="/iletisim" element={<Contact />} />
                </Routes>
            </Layout>
            <Chatbot />
        </Router>
    )
}

export default App
