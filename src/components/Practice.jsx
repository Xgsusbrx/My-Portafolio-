export const Practice = () => {
  return (
    <section id="practice" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="rounded-3xl border border-gray-700 bg-gray-800/50 px-6 py-14 text-center md:px-12">
        <h2 className="text-4xl font-bold mb-6">
          ¿Tienes un proyecto en mente? 💡
        </h2>

        <p className="mx-auto max-w-xl text-lg text-gray-300 leading-relaxed">
          Ya sea crear una página web, mejorar una aplicación existente o
          resolver un problema técnico, cuéntame qué necesitas y buscamos
          juntos la mejor forma de llevarlo a cabo.
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 rounded-full bg-[#ff5253] px-8 py-3 font-semibold text-white shadow-lg shadow-[#ff5253]/20 transition hover:bg-[#e04445] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5253] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          Hablemos de tu proyecto ✨
        </a>
      </div>
    </section>
  );
};