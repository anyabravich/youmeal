import styled from "styled-components";

import { rem } from "polished";
import Container from "../Container";
import Basket from "../Basket";
import Cards from "../Cards";
import { useLabel } from "../LabelContext";
import { GOODS } from "../../mock/goods";
import { breakpoints } from "../../styles/theme";
import { useBasketStorage } from "./hooks/useBasketStorage";

const Main = () => {
  const { selectedLabel } = useLabel();
  const { basketData, addedItems, addToBasket } = useBasketStorage();

  return (
    <MainContainer>
      <MainInner>
        <Basket cards={basketData} />

        <Cards
          cards={GOODS}
          selectedLabel={selectedLabel}
          addToBasket={addToBasket}
          addedItems={addedItems}
        />
      </MainInner>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  margin-bottom: ${rem(50)};
`;

const MainInner = styled(Container)`
  display: grid;
  align-items: flex-start;
  gap: ${rem(30)};
  grid-template-columns: ${rem(300)} 1fr;

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Main;
