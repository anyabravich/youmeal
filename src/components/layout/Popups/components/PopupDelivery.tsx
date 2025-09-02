import styled from "styled-components";
import { rem } from "polished";
import Input from "../../../ui/Input";
import Radio from "../../../ui/Radio";
import { useState } from "react";
import Button from "../../../ui/Button";
import { breakpoints } from "../../../../styles/theme";

const PopupDelivery = () => {
  const [deliveryType, setDeliveryType] = useState("pickup");

  return (
    <Container>
      <ImageWrapper>
        <Image src="/images/delivery/image.svg" alt="delivery" />
      </ImageWrapper>
      <Content>
        <Title className="h3">Доставка</Title>
        <FormSection>
          <Inputs>
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
          </Inputs>
          <RadioGroup>
            <Radio
              label="Самовывоз"
              name="delivery"
              value="pickup"
              checked={deliveryType === "pickup"}
              onChange={(value) => setDeliveryType(value)}
            />
            <Radio
              label="Доставка"
              name="delivery"
              value="delivery"
              checked={deliveryType === "delivery"}
              onChange={(value) => setDeliveryType(value)}
            />
          </RadioGroup>
          <Inputs>
            <Input placeholder="Улица, дом, квартира" />
            <FloorIntercomGrid>
              <Input placeholder="Этаж" />
              <Input placeholder="Домофон" />
            </FloorIntercomGrid>
          </Inputs>
          <ButtonAction state="primary">Оформить</ButtonAction>
        </FormSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${breakpoints.mobile}px) {
    display: block;
    height: 100%;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;

  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Title = styled.h3`
  margin-bottom: ${rem(16)};
`;

const Content = styled.div`
  padding: ${rem(54)} ${rem(24)} ${rem(24)};

  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${rem(32)} ${rem(10)};
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};

  @media (max-width: ${breakpoints.mobile}px) {
    height: 100%;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
  margin-bottom: ${rem(10)};
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

const FloorIntercomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${rem(8)};
`;

const ButtonAction = styled(Button)`
  width: 100%;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: auto;
  }
`;

export default PopupDelivery;
