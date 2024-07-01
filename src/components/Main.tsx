import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Basket from "./Basket";
import Cards from "./Cards";

const Main = () => {
  return (
    <MainContainer>
      <MainInner>
        <Basket />
        <Cards />
      </MainInner>
    </MainContainer>
  );
};

const MainContainer = styled.main``;

const MainInner = styled(Container)`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: ${rem(300)} 1fr;
`;

export default Main;
