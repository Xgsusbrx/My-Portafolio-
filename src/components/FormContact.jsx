import { useState } from "react";

export const FormContact = () => {
  const [asunto, setAsunto] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <form>
        <label>Asunto </label>
        <div className="mb-4" >
          <input
            className="border rounded-md border-gray-500 p-2"
            value={asunto}
            onChange={(e) => {
              setAsunto(e.target.value);
            }}
          ></input>
        </div>
        <label>Mensaje </label>
        <div className="mb-2">
          <input
            className="border rounded-md border-gray-500 p-2"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></input>
        </div>
        <a
          href={`mailto:brian95gsus@gmail.com?body=${body}&subject=${asunto}`}
          className="inline-block mt-4 text-white bg-[#ff5253] rounded-full px-3 py-1 cursor-pointer border border-black hover:text-black hover:bg-white hover:border hover:border-black"
        >
          Enviar
        </a>
      </form>
    </>
  );
};
