import styled from "styled-components";
import Card from "./Card";
import { rem } from "polished";
import { ICard, ICards } from "../types";
import { breakpoints } from "../styles/theme";

const Cards = ({ selectedLabel, cards, addToBasket, addedItems }: ICards) => {
  const filteredCards = cards.filter(({ category }) =>
    selectedLabel ? category === selectedLabel : true
  );

  return (
    <CardsContainer>
      <CardsTitle className="h2">{selectedLabel || "Все"}</CardsTitle>
      <>
        {filteredCards.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
          <CardsItems>
            {filteredCards.map(({ id, image, price, title, weight }: ICard) => (
              <CardsItem key={id}>
                <Card
                  id={id}
                  image={image}
                  price={price}
                  title={title}
                  weight={weight}
                  addToBasket={addToBasket}
                  isAdded={addedItems?.includes(id)}
                />
              </CardsItem>
            ))}
          </CardsItems>
        )}
      </>
    </CardsContainer>
  );
};

const CardsContainer = styled.section`
  margin-bottom: ${rem(50)};
  width: 100%;
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

const CardsItem = styled.li``;

export default Cards;
