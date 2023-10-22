//import React from "react";
import { useState } from "react";

function Calculadora() {
  const [input, setinput] = useState("");
  const [valor, setValor] = useState(0);

  const handleinput = (e) => {
    const numero = e.target.value;
    setinput(numero);
  };

  const handleclick = () => {
    const numberadd = parseInt(input, 10);
    setValor(valor + numberadd);
    setinput("");
  };

  return (
    <div className="ml-5 flex flex-col container mx-auto bg-slate-800 p-10">
      <label htmlFor="Valor" className="text-xl font-bold">
        Valor
      </label>
      <input type="number" id="valor" value={input} onChange={handleinput} className="bg-zinc-900 rounded p-2" placeholder="Insira um valor" />
      <button className="somar" onClick={handleclick}>
        Somar
      </button>
      <button className="limpar" onClick={() => setValor(0)}>
        Limpar
      </button>
      <h2 className="text-2xl	font-bold">Valor total: {valor}</h2>
    </div>
  );
}

export default Calculadora;
