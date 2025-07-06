export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="text-gray-600 mb-4">¿Quieres trabajar conmigo o ver más de mis proyectos?</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Xgsusbrx" target="_blank" className="text-gray-800 hover:text-black">GitHub</a>
        <a href="https://www.linkedin.com/in/brianluzardo/" target="_blank" className="text-gray-800 hover:text-black">LinkedIn</a>
        <a href="mailto:brian95gsus@gmail.com" className="text-gray-800 hover:text-black">Email</a>
              
      </div>
    </section>
  );
}
export default Contact