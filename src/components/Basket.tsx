import styled from "styled-components";
import { rem } from "polished";
import { breakpoints, colors } from "../styles/theme";
import BasketCard from "./BasketCard";
import Button from "./Button";
import { ICards } from "../types";
import { useState } from "react";

interface BasketContainerProps {
  $isOpen: boolean;
}

const Basket = ({ cards }: ICards) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const setCount = (id: number, count: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: count,
    }));
  };

  const totalPrice = cards.reduce((total, card) => {
    const count = quantities[card.id] || 1;
    return total + card.price * count;
  }, 0);

  return (
    <BasketContainer
      $isOpen={isOpenBasket}
      onClick={() => setIsOpenBasket(!isOpenBasket)}
    >
      <BasketTitle className="h3">
        <span>Корзина</span>
        <BasketCount>{cards.length}</BasketCount>
      </BasketTitle>
      {cards.length > 0 ? (
        <BasketContainerMobile $isOpen={isOpenBasket}>
          {cards.map((card) => (
            <BasketCard
              key={card.id}
              title={card.title}
              weight={card.weight}
              image={card.image}
              price={card.price}
              id={card.id}
              count={quantities[card.id] || 1}
              setCount={setCount}
            />
          ))}
          <BasketTotal>
            <BasketTotalTitle>Итого</BasketTotalTitle>
            <BasketTotalPrice>{totalPrice}₽</BasketTotalPrice>
          </BasketTotal>
          <BasketButton className="_orange">Оформить заказ</BasketButton>
          <BasketDelivery>
            <BasketDeliveryImage src="/images/delivery.svg" alt="Доставка" />
            <span>Бесплатная доставка</span>
          </BasketDelivery>
        </BasketContainerMobile>
      ) : (
        <p>Тут пока пусто :(</p>
      )}
    </BasketContainer>
  );
};

const BasketContainer = styled.aside<BasketContainerProps>`
  position: sticky;
  top: ${rem(72)};
  margin-top: ${rem(72)};
  background: ${colors.white};
  padding: ${rem(24)} ${rem(17)};
  border-radius: ${rem(18)};

  @media (max-width: ${breakpoints.tablet}px) {
    position: absolute;
    top: 0;
    margin-top: 0;

    ${({ $isOpen }) =>
      $isOpen &&
      `
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
    `}
  }
`;

const BasketContainerMobile = styled.div<BasketContainerProps>`
  @media (max-width: ${breakpoints.tablet}px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    background: white;
    top: ${rem(72)};
    left: 0;
    padding: ${rem(24)} ${rem(17)};
  }
`;

const BasketTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(12)};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-bottom: 0;
  }
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
