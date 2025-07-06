import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.url} target="_blank" className="text-blue-600 mt-2 inline-block">
                Ver repositorio →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects