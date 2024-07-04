import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";
import BasketCard from "./BasketCard";
import Button from "./Button";

const Basket = () => {
  return (
    <BasketContainer>
      <BasketTitle className="h3">
        <span>Корзина</span>
        <BasketCount>4</BasketCount>
      </BasketTitle>
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketTotal>
        <BasketTotalTitle>Итого</BasketTotalTitle>
        <BasketTotalPrice>1279₽</BasketTotalPrice>
      </BasketTotal>
      <Button className="_orange">Оформить заказ</Button>
    </BasketContainer>
  );
};

const BasketContainer = styled.aside`
  position: sticky;
  top: ${rem(72)};
  margin-top: ${rem(72)};
  background: ${colors.white};
  padding: ${rem(24)} ${rem(17)};
  border-radius: ${rem(18)};
`;

const BasketTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(12)};
`;

const BasketCount = styled.span`
  padding: ${rem(2)} ${rem(16)};
  font-size: ${rem(12)};
  line-height: normal;
  background: ${colors.gray};
  border-radius: ${rem(6)};
`;

const BasketTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: ${rem(16)} ${rem(24)};
`;

const BasketTotalTitle = styled.p``;

const BasketTotalPrice = styled.p``;

export default Basket;
