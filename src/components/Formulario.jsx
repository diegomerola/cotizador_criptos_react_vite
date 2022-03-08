// Importar React
import { React, useState, useEffect } from "react";

// Importar estilos
import styled from "@emotion/styled";

// Importar Hook - Componentes
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";

// Importar arreglo de monedas
import { monedas } from "../data/monedas";

// Input del formulario
const InputSubmit = styled.input`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background-color: #9497ff;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  // State para error
  const [error, setError] = useState(false);

  // State para criptomonedas
  const [criptos, setCriptos] = useState([]);

  // Hook para moneda
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  // Hook para criptomoneda
  const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptos
  );

  // Funcion para consultar API:
  const consultarAPI = async () => {
    // Crear url
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    // Hacer consulta
    const response = await fetch(url);
    const resultado = await response.json();

    // Recorrer arreglo y crear objeto
    const arrayCriptos = resultado.Data.map((moneda) => {
      const objeto = {
        id: moneda.CoinInfo.Name,
        nombre: moneda.CoinInfo.FullName,
      };
      return objeto;
    });

    // Pasar el arreglo al state
    setCriptos(arrayCriptos);
  };

  // UseEffect para consultar API
  useEffect(() => {
    consultarAPI();
  }, []);

  // Funcion para handleSubmit
  const handleSubmit = (e) => {
    // Detener submit
    e.preventDefault();

    // Validar
    if (moneda === "" || criptoMoneda === "") {
      // Si existe un error:
      setError(true);
      return;
    }
    // Sino hay error:
    setError(false);

    // Crear objeto con las 2 monedas seleccionadas
    setMonedas({ moneda, criptoMoneda });
  };

  return (
    <>
      {error ? <Error msj={"Todos los campos son obligatorios"} /> : null}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMonedas />
        <InputSubmit type="submit" value="Cotizar"></InputSubmit>
      </form>
    </>
  );
};

export default Formulario;
