import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Basket from "./Basket";
import Cards from "./Cards";
import { useLabel } from "./LabelContext";
import { ICard } from "../types";
import { useState } from "react";

const data = [
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
    category: "Бургеры",
  },
  {
    id: 7,
    image: "card-7",
    price: 250,
    title: "Начос",
    weight: 220,
    category: "Закуски",
  },
  {
    id: 8,
    image: "card-8",
    price: 245,
    title: "Картошка фри",
    weight: 180,
    category: "Закуски",
  },
  {
    id: 9,
    image: "card-9",
    price: 230,
    title: "Луковые кольца",
    weight: 160,
    category: "Закуски",
  },
  {
    id: 10,
    image: "card-10",
    price: 290,
    title: "Домашний хот-дог",
    weight: 250,
    category: "Хот-доги",
  },
  {
    id: 11,
    image: "card-11",
    price: 239,
    title: "Жгучий хот-дог",
    weight: 245,
    category: "Хот-доги",
  },
  {
    id: 12,
    image: "card-12",
    price: 220,
    title: "Классический хот-дог",
    weight: 215,
    category: "Хот-доги",
  },
];

const Main = () => {
  const { selectedLabel } = useLabel();
  const [basketData, setBasketData] = useState<ICard[]>([]);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const addToBasket = (card: ICard) => {
    setBasketData((prevBasketData) => [...prevBasketData, card]);
    setAddedItems((prevAddedItems) => [...prevAddedItems, card.id]);
  };

  return (
    <MainContainer>
      <MainInner>
        <Basket cards={basketData} />
        <Cards
          cards={data}
          selectedLabel={selectedLabel}
          addToBasket={addToBasket}
          addedItems={addedItems}
        />
      </MainInner>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  margin-bottom: ${rem(50)};
`;

const MainInner = styled(Container)`
  display: grid;
  align-items: flex-start;
  gap: ${rem(30)};
  grid-template-columns: ${rem(300)} 1fr;
`;

export default Main;
