import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Basket from "./Basket";
import Cards from "./Cards";
import { useLabel } from "./LabelContext";

const Main = () => {
  const { selectedLabel } = useLabel();

  return (
    <MainContainer>
      <MainInner>
        <Basket />
        <Cards selectedLabel={selectedLabel} />
      </MainInner>
    </MainContainer>
  );
};

const MainContainer = styled.main``;

const MainInner = styled(Container)`
  display: grid;
  align-items: flex-start;
  gap: ${rem(30)};
  grid-template-columns: ${rem(300)} 1fr;
`;

export default Main;
