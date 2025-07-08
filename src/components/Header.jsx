export const Header = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="https://avatars.githubusercontent.com/u/159544824?v=4"
        className="h-64 rounded-full mb-6" 
      />
      <h1 className="text-4xl md:text-6xl font-bold">Hola, soy Brian</h1>
      <p className="mt-4 text-xl text-gray-600">
        Desarrollador Frontend con React
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
      >
        Ver proyectos
      </a>
    </section>
  );
};
export default Header;
