const categories = [
  { title: "Frontend", emoji: "🎨", items: ["React", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", emoji: "⚙️", items: ["Python", "Django", "Ruby on Rails"] },
  { title: "Herramientas", emoji: "🛠️", items: ["Git", "GitHub", "Docker", "PostgreSQL"] },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-20 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Mi stack de trabajo</h2>
      <p className="text-lg text-gray-400 mb-12">
        Las tecnologías con las que construyo mis proyectos
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map(({ title, emoji, items }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 transition hover:-translate-y-1 hover:border-gray-500"
          >
            <h3 className="text-2xl font-semibold mb-4">
              <span aria-hidden="true">{emoji}</span> {title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};