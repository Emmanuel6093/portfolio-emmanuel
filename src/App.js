import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from './components/ContactMe';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
        <Hero />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}


export default App;
