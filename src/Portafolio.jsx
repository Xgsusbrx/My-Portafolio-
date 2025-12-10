import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



export const Portafolio= () => {
  

  return (
    <>
  <main className='font-sans min-h-screen bg-[#23253a] text-[#d6d4e5]'> 
    <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>   
    </>
  )
}


