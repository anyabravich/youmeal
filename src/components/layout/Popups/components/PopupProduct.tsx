import styled from "styled-components";

import { rem } from "polished";
import { breakpoints, colors } from "../../../../styles/theme";
import { IPopupProductProps } from "../types";
import { usePopupProduct } from "../hooks/usePopupProduct";
import Quantity from "../../../ui/Quantity";
import Button from "../../../ui/Button";

const PopupProduct = ({
  cardData,
  addToBasket,
  isAdded,
  onClose,
  currentQuantity = 1,
  updateQuantity,
}: IPopupProductProps) => {
  const {
    quantity,
    localIsAdded,
    totalPrice,
    handleIncrement,
    handleDecrement,
    handleAddToBasket,
  } = usePopupProduct({
    cardData,
    addToBasket,
    isAdded,
    onClose,
    currentQuantity,
    updateQuantity,
  });

  if (!cardData) {
    return <div>Нет данных о товаре</div>;
  }

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
            state={localIsAdded ? "primary secondary" : undefined}
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
        <p className="h3">{totalPrice}₽</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: ${rem(24)};
  padding-bottom: ${rem(36)};

  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${rem(32)} ${rem(20)};
  }
`;

const Title = styled.p`
  margin-bottom: ${rem(24)};

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${rem(28)};
    margin-bottom: ${rem(12)};
  }
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

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
    gap: ${rem(10)};
  }
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

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
    gap: ${rem(10)};
  }
`;

const ButtonAction = styled(Button)`
  min-width: ${rem(276)};

  @media (max-width: ${breakpoints.mobile}px) {
    width: ${rem(200)};
    min-width: initial;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: ${rem(16)};
`;

export default PopupProduct;
