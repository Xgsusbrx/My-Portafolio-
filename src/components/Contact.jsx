import { FormContact } from "./FormContact";

export const Contact = () => {
  const phone = "5491172373115"; 
  const message = encodeURIComponent(
    "Hola Brian, vi tu portafolio y me gustaría hablar sobre un proyecto."
  );

  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>

      <p className="mb-6">¿Quieres trabajar conmigo?</p>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#1ebe5b] transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.8 11.8 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.8 9.8 0 0 1-1.5-5.2c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.09 1.02 6.95 2.88a9.77 9.77 0 0 1 2.88 6.95c0 5.42-4.41 9.86-9.78 9.86Zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        Escríbeme por WhatsApp
      </a>

      <FormContact />

      <p className="mb-4 mt-4">¿Quieres ver más de mis proyectos?</p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/Xgsusbrx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff5253] hover:text-black"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/brianluzardo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff5253] hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;