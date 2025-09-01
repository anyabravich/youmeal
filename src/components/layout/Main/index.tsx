import styled from "styled-components";

import { rem } from "polished";
import Container from "../Container";
import Basket from "../../features/Basket";
import Cards from "../../features/Cards";
import { GOODS } from "../../../mock/goods";
import { breakpoints } from "../../../styles/theme";
import { useBasketStorage } from "./hooks/useBasketStorage";
import { useErrorHandler } from "../../../hooks/useErrorHandler";
import ErrorDisplay from "../../common/ErrorDisplay";
import { useLabel } from "../../common/LabelContext";
import { IMain } from "./types";

const Main = ({ onOpenPopup }: IMain) => {
  const { selectedLabel } = useLabel();
  const { basketData, addedItems, addToBasket, removeFromBasket } =
    useBasketStorage();
  const { error, clearError } = useErrorHandler();

  return (
    <MainContainer>
      <MainInner>
        <Basket cards={basketData} removeFromBasket={removeFromBasket} />

        <Cards
          cards={GOODS}
          selectedLabel={selectedLabel}
          addToBasket={addToBasket}
          addedItems={addedItems}
          onOpenPopup={onOpenPopup}
        />
      </MainInner>

      <ErrorDisplay
        error={error}
        onClose={clearError}
        onRetry={clearError}
        title="Ошибка работы с корзиной"
      />
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
