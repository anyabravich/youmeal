import styled from "styled-components";
import Card from "./Card";
import { rem } from "polished";
import { ICard, ICards } from "../types";
import { useState } from "react";

const CardsData = [
  {
    id: 1,
    image: "card-1",
    price: 689,
    title: "Мясная бомба",
    weight: 520,
    category: "Бургеры",
  },
  {
    id: 2,
    image: "card-2",
    price: 550,
    title: "Супер сырный",
    weight: 512,
    category: "Бургеры",
  },
  {
    id: 3,
    image: "card-3",
    price: 639,
    title: "Сытный",
    weight: 580,
    category: "Бургеры",
  },
  {
    id: 4,
    image: "card-4",
    price: 480,
    title: "Тяжелый удар",
    weight: 470,
    category: "Бургеры",
  },
  {
    id: 5,
    image: "card-5",
    price: 450,
    title: "Вечная классика",
    weight: 450,
    category: "Бургеры",
  },
  {
    id: 6,
    image: "card-6",
    price: 560,
    title: "Итальянский",
    weight: 510,
    category: "Закуски",
  },
];

const Cards = ({ selectedLabel }: ICards) => {
  const filteredCards = CardsData.filter(({ category }) =>
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
`;

const CardsTitle = styled.h2`
  margin-bottom: ${rem(24)};
`;

const CardsItems = styled.ul`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(3, minmax(${rem(300)}, 1fr));
`;

const CardsItem = styled.li``;

export default Cards;
