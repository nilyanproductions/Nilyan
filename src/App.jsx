import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Cursor from './components/Cursor/Cursor'
import Overview from './components/Overview/Overview'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="app">
            <Cursor />
            <Navbar />
            <main>
                <Hero />

                <Services />
                <Work />
                <Overview />
            </main>
            <Footer />
        </div>
    )
}

export default App
