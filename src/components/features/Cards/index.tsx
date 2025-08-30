import styled from "styled-components";

import Card from "../../ui/Card";
import { rem } from "polished";
import { ICards, IProduct } from "../../../types";
import { breakpoints } from "../../../styles/theme";
import { useFilteredCards } from "./hooks";

const Cards = ({ selectedLabel, cards, addToBasket, addedItems }: ICards) => {
  const filteredCards = useFilteredCards(cards, selectedLabel);

  return (
    <CardsContainer>
      <CardsTitle className="h2">{selectedLabel}</CardsTitle>
      {filteredCards.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <CardsItems>
          {filteredCards.map((card: IProduct) => (
            <li key={card.id}>
              <Card
                id={card.id}
                image={card.image}
                price={card.price}
                title={card.title}
                weight={card.weight}
                category={card.category}
                addToBasket={addToBasket || (() => {})}
                isAdded={addedItems?.includes(card.id) || false}
              />
            </li>
          ))}
        </CardsItems>
      )}
    </CardsContainer>
  );
};

const CardsContainer = styled.section`
  margin-bottom: ${rem(50)};
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    margin-top: ${rem(100)};
  }
`;

const CardsTitle = styled.h2`
  margin-bottom: ${rem(24)};
`;

const CardsItems = styled.ul`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(3, minmax(${rem(300)}, 1fr));

  @media (max-width: ${breakpoints.laptop}px) {
    grid-template-columns: repeat(auto-fit, minmax(${rem(250)}, 1fr));
  }

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fit, minmax(${rem(145)}, 1fr));
  }
`;

export default Cards;
