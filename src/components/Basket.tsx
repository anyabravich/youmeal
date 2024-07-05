import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";
import BasketCard from "./BasketCard";
import Button from "./Button";
import { ICards } from "../types";

const Basket = ({ cards }: ICards) => {
  return (
    <BasketContainer>
      <BasketTitle className="h3">
        <span>Корзина</span>
        <BasketCount>{cards.length}</BasketCount>
      </BasketTitle>
      {cards.length > 0 ? (
        <>
          {cards.map((card) => (
            <div key={card.id}>
              <BasketCard
                title={card.title}
                weight={card.weight}
                image={card.image}
                price={card.price}
                id={card.id}
              />
            </div>
          ))}
          <BasketTotal>
            <BasketTotalTitle>Итого</BasketTotalTitle>
            <BasketTotalPrice>1279₽</BasketTotalPrice>
          </BasketTotal>
          <BasketButton className="_orange">Оформить заказ</BasketButton>
          <BasketDelivery>
            <BasketDeliveryImage src="/images/delivery.svg" alt="Доставка" />
            <span>Бесплатная доставка</span>
          </BasketDelivery>
        </>
      ) : (
        <p>Тут пока пусто :(</p>
      )}
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

const BasketButton = styled(Button)`
  margin-bottom: ${rem(8)};
`;

const BasketDelivery = styled.p`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  font-size: ${rem(12)};
  line-height: normal;
`;

const BasketDeliveryImage = styled.img`
  --size: ${rem(24)};
  width: var(--size);
  height: var(--size);
`;

export default Basket;
