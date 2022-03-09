import styled from "@emotion/styled";
import React from "react";

const MsjError = styled.p`
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: red;
  display: block;
  padding: 15px 0px;
`;

const Error = ({ msj }) => {
  return <MsjError>{msj}</MsjError>;
};

export default Error;
