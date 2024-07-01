import styled from "styled-components";
import Card from "./Card";
import { rem } from "polished";
import { ICard } from "../types";

const CardsData = [
  {
    id: 1,
    image: "card-1",
    price: 689,
    title: "Мясная бомба",
    weight: 520,
  },
  {
    id: 2,
    image: "card-2",
    price: 550,
    title: "Супер сырный",
    weight: 512,
  },
  {
    id: 3,
    image: "card-3",
    price: 639,
    title: "Сытный",
    weight: 580,
  },
  {
    id: 4,
    image: "card-4",
    price: 480,
    title: "Тяжелый удар",
    weight: 470,
  },
  {
    id: 5,
    image: "card-5",
    price: 450,
    title: "Вечная классика",
    weight: 450,
  },
  {
    id: 6,
    image: "card-6",
    price: 560,
    title: "Итальянский",
    weight: 510,
  },
];

const Cards = () => {
  return (
    <CardsContainer>
      <CardsTitle className="h2">Бургеры</CardsTitle>
      <CardsItems>
        {CardsData.map(({ id, image, price, title, weight }: ICard) => (
          <CardsItem>
            <Card
              id={id}
              key={id}
              image={image}
              price={price}
              title={title}
              weight={weight}
            />
          </CardsItem>
        ))}
      </CardsItems>
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
