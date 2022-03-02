import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  font-family: "Lato", sans-serif;
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

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  return (
    <form>
      <SelectMonedas />
      {moneda}
      <InputSubmit type="submit" value="Cotizar"></InputSubmit>
    </form>
  );
};

export default Formulario;
