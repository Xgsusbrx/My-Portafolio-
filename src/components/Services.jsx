const services = [
  {
    title: "🌐 Desarrollo web",
    description:
      "Landing pages, sitios web y aplicaciones adaptadas a las necesidades del proyecto.",
  },
  {
    title: "🛠️ Mantenimiento y correcciones",
    description:
      "Solución de errores, problemas responsive y mejoras de funcionalidades existentes.",
  },
  {
    title: "🔌 APIs e integraciones",
    description:
      "Integración de APIs, formularios, servicios externos y automatizaciones.",
  },
  {
    title: "⚙️ Backend",
    description:
      "Desarrollo de APIs y funcionalidades con Python/Django o Ruby on Rails.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-14">¿En qué puedo ayudarte?</h2>

      <div className="space-y-12">
        {services.map(({ title, description }) => (
          <div key={title}>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};