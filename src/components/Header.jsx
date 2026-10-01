export const Header = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="https://avatars.githubusercontent.com/u/159544824?v=4"
        className="h-64 rounded-full mb-6" 
      />
      
      <h1 className="text-4xl md:text-6xl font-bold">Hola, soy Brian</h1>
      <h2 className="text-2xl md:text-2xl font-bold mt-4">Desarrollador Web Full Stack</h2>
      <p className="mt-4 text-xl text-[#d6d4e5]">   

Desarrollo sitios web, aplicaciones y soluciones a medida para negocios y proyectos digitales.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-[#ff5253] text-white rounded-full hover:bg-gray-800"
      >
        Ver proyectos
      </a>
    </section>
  );
};
export default Header;
