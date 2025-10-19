import React from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/views/HomePage'
import Footer from './components/views/Footer'
const App: React.FC = () => {


  return (
    <div className="min-h-screen bg-white">
      <header>
      <Navbar />
      </header>
      <main>
      <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App