import { useState } from "react";

export const FormContact = () => {
  const [asunto, setAsunto] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <form>
        <label>Asunto </label>
        <div className="mb-2" >
          <input
            className="border rounded-md border-gray-500 p-1"
            value={asunto}
            onChange={(e) => {
              setAsunto(e.target.value);
            }}
          ></input>
        </div>
        <label>Mensaje </label>
        <div className="mb-2">
          <input
            className="border rounded-md border-gray-500 p-1"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></input>
        </div>
        <a
          href={`mailto:brian95gsus@gmail.com?body=${body}&subject=${asunto}`}
          className="text-white bg-black rounded-full px-3 py-1 cursor-pointer border border-black hover:text-black hover:bg-white hover:border hover:border-black"
        >
          Enviar
        </a>
      </form>
    </>
  );
};
