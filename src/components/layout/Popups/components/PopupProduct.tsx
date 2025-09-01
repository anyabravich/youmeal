import { rem } from "polished";
import styled from "styled-components";
import { colors } from "../../../../styles/theme";

import Quantity from "../../../ui/Quantity";
import Button from "../../../ui/Button";

const PopupProduct = () => {
  return (
    <Container>
      <Title className="h2">Мясная бомба</Title>

      <Content>
        <ImageWrapper>
          <Image src="/images/cards/card-1.jpg" alt="Мясная бомба" />
        </ImageWrapper>
        <div>
          <Text className="text">
            Супер мясное наслаждение! Большая рубленая котлета из&nbsp;свежего
            говяжего мяса покорит вас своей сочностью, а&nbsp;хрустящие листья
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
            <Weight>520г, ккал 430</Weight>
          </div>
        </div>
      </Content>

      <Footer>
        <Actions>
          <ButtonAction>Добавить</ButtonAction>
          <Quantity count={1} onIncrement={() => {}} onDecrement={() => {}} />
        </Actions>
        <p className="h3">689₽</p>
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
