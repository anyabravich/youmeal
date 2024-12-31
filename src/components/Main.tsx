import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Basket from "./Basket";
import Cards from "./Cards";
import { useLabel } from "./LabelContext";
import { ICard } from "../types";
import { useEffect, useState } from "react";
import { goods } from "../mock/goods";

const Main = () => {
  const { selectedLabel } = useLabel();
  const [basketData, setBasketData] = useState<ICard[]>([]);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");

    if (savedBasket) {
      const parsedBasket: ICard[] = JSON.parse(savedBasket);

      setBasketData(parsedBasket);
      setAddedItems(parsedBasket.map((card) => card.id));
    }
  }, []);

  const addToBasket = (card: ICard) => {
    const updatedBasket = [...basketData, card];
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    setBasketData(updatedBasket);
    setAddedItems((prevAddedItems) => [...prevAddedItems, card.id]);
  };

  return (
    <MainContainer>
      <MainInner>
        <Basket cards={basketData} />
        <Cards
          cards={goods}
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
