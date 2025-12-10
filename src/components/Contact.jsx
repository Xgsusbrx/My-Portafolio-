
import { FormContact } from "./FormContact";
export const Contact = () => {



  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">¿Quieres ver más de mis proyectos? </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/Xgsusbrx"
          target="_blank"
          className="text-[#ff5253] hover:text-black mb-4"
        >
          GitHub
        </a>
      </div>
      <a>¿Quieres trabajar conmigo?</a>
      <div className="flex justify-center gap-6 mt-6">
       
      </div>

      <FormContact/>
      <div className="flex justify-center gap-6 mt-6"> <a
          href="https://www.linkedin.com/in/brianluzardo/"
          target="_blank"
          className="text-[#ff5253] hover:text-black"
        >
          LinkedIn
        </a></div>

    </section>
  );
};
export default Contact;
