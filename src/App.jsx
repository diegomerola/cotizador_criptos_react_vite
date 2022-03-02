import styled from "@emotion/styled";
import imageCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  margin: 100px auto 0 auto;
  display: block;
  max-width: 400px;
  width: 80%;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  return (
    <div>
      <Contenedor>
        <Imagen src={imageCripto} alt="Imagen Criptomonedas" />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario />
        </div>
      </Contenedor>
    </div>
  );
}

export default App;
