import { React, useState } from "react";
import styled from "@emotion/styled";

// Label del formulario
const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

// Select del formulario
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

// Hook useSelectMonedas (recibe 2 argumentos)
const useSelectMonedas = (label, opciones) => {
  // State para SelectMonedas
  const [state, setState] = useState("");

  // Funcion que crea el Hook SelectMonedas y retorna 2 valores [state,SelectMonedas]
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectMonedas]; // Devuelve moneda seleccionada, componente SelectMonedas
};

export default useSelectMonedas;
