import styled from "styled-components";

import { rem } from "polished";
import { breakpoints, colors } from "../../styles/theme";
import BasketCard from "../BasketCard";
import { ICards } from "../../types";
import { IBasketStyled } from "./types";
import { useBasket } from "./hooks/useBasket";
import Button from "../ui/Button";

const Basket = ({ cards }: ICards) => {
  const { isOpenBasket, toggleBasket, quantities, setCount, totalPrice } =
    useBasket(cards);

  return (
    <Container $isOpen={isOpenBasket} onClick={toggleBasket}>
      <Title className="h3">
        <span>Корзина</span>

        <Count>{cards.length}</Count>
      </Title>

      {cards.length > 0 ? (
        <ContainerMobile $isOpen={isOpenBasket}>
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
            <p>Итого</p>
            <p>{totalPrice}₽</p>
          </BasketTotal>

          <BasketButton className="_orange">Оформить заказ</BasketButton>

          <BasketDelivery>
            <BasketDeliveryImage src="/images/delivery.svg" alt="Доставка" />
            <span>Бесплатная доставка</span>
          </BasketDelivery>
        </ContainerMobile>
      ) : (
        <p>Тут пока пусто :(</p>
      )}
    </Container>
  );
};

const Container = styled.aside<IBasketStyled>`
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

const ContainerMobile = styled.div<IBasketStyled>`
  @media (max-width: ${breakpoints.tablet}px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    background: ${colors.white};
    top: ${rem(72)};
    left: 0;
    padding: ${rem(24)} ${rem(17)};
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(12)};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-bottom: 0;
  }
`;

const Count = styled.span`
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
