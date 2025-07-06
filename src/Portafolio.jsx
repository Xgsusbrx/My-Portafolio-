import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



export const Portafolio= () => {
  

  return (
    <>
  <main className='font-sans bg-white text-gray-900'> 
    <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>   
    </>
  )
}


