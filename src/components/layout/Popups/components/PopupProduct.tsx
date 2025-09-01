import { rem } from "polished";
import styled from "styled-components";
import { colors } from "../../../../styles/theme";
import { IPopupCardData } from "../../../../types";

import Quantity from "../../../ui/Quantity";
import Button from "../../../ui/Button";
import { useState, useEffect } from "react";
import { IProduct } from "../../../../types";

interface PopupProductProps {
  cardData?: IPopupCardData;
  addToBasket?: (product: IProduct, quantity?: number) => void;
  isAdded?: boolean;
  onClose?: () => void;
  currentQuantity?: number;
  updateQuantity?: (id: number, quantity: number) => void;
}

const PopupProduct = ({
  cardData,
  addToBasket,
  isAdded,
  onClose,
  currentQuantity = 1,
  updateQuantity,
}: PopupProductProps) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  const [localIsAdded, setLocalIsAdded] = useState(isAdded || false);

  useEffect(() => {
    setLocalIsAdded(isAdded || false);
    setQuantity(currentQuantity);
  }, [isAdded, currentQuantity, cardData?.id]);

  if (!cardData) {
    return <div>Нет данных о товаре</div>;
  }

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    if (isAdded && updateQuantity) {
      updateQuantity(cardData.id, newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      if (isAdded && updateQuantity) {
        updateQuantity(cardData.id, newQuantity);
      }
    }
  };

  const handleAddToBasket = () => {
    if (addToBasket) {
      addToBasket(
        {
          id: cardData.id,
          image: cardData.image,
          price: cardData.price,
          title: cardData.title,
          weight: cardData.weight,
          category: cardData.category,
        },
        quantity
      );

      setLocalIsAdded(true);

      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <Container>
      <Title className="h2">{cardData.title}</Title>

      <Content>
        <ImageWrapper>
          <Image src={cardData.image} alt={cardData.title} />
        </ImageWrapper>
        <div>
          <Text className="text">
            Супер мясное наслаждение! Большая рубленая котлета из&nbsp;свежего
            говяжьего мяса покорит вас своей сочностью, а&nbsp;хрустящие листья
            салата добавят свежести.
          </Text>
          <div className="text-small">
            <CompoundTitle>Состав:</CompoundTitle>
            <Compound>
              <li>Пшеничная булочка</li>
              <li>Котлета из говядины</li>
              <li>Красный лук</li>
              <li>Листья салата</li>
              <li>Соус горчичный</li>
            </Compound>
            <Weight>{cardData.weight}г, ккал 430</Weight>
          </div>
        </div>
      </Content>

      <Footer>
        <Actions>
          <ButtonAction
            className={localIsAdded ? "_orange _added" : ""}
            onClick={handleAddToBasket}
          >
            {localIsAdded ? "Добавлено" : "Добавить"}
          </ButtonAction>
          <Quantity
            count={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </Actions>
        <p className="h3">{cardData.price * quantity}₽</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: ${rem(24)};
  padding-bottom: ${rem(36)};
`;

const Title = styled.p`
  margin-bottom: ${rem(24)};
`;

const ImageWrapper = styled.div`
  width: ${rem(276)};
  height: ${rem(220)};

  overflow: hidden;
  border-radius: ${rem(16)};

  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  gap: ${rem(16)};

  margin-bottom: ${rem(40)};
`;

const Text = styled.p`
  margin-bottom: ${rem(10)};
  line-height: 1.3;
`;

const CompoundTitle = styled.p`
  margin-bottom: ${rem(4)};
`;

const Compound = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(2)};
  margin-bottom: ${rem(4)};
`;

const Weight = styled.p`
  color: ${colors.silver};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonAction = styled(Button)`
  min-width: ${rem(276)};
`;

const Actions = styled.div`
  display: flex;
  gap: ${rem(16)};
`;

export default PopupProduct;
