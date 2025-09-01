import styled from "styled-components";
import { colors } from "../../../../styles/theme";
import { rem } from "polished";
import { IPopupDeliveryProps } from "../types";
import { hideScrollbars } from "../../../../styles/utils";
import Input from "../../../ui/Input";

const PopupDelivery = ({ onClose }: IPopupDeliveryProps) => {
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
        </FormSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageWrapper = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  margin-bottom: ${rem(16)};
`;

const Content = styled.div`
  padding: ${rem(54)} ${rem(24)} ${rem(24)};
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
`;

export default PopupDelivery;
