import styled from "styled-components";
import { colors } from "../../../../styles/theme";
import { rem } from "polished";
import { IPopupDeliveryProps } from "../types";
import { hideScrollbars } from "../../../../styles/utils";

const PopupDelivery = ({ onClose }: IPopupDeliveryProps) => {
  return (
    <Container>
      <Title>Оформление доставки</Title>
      <Content>
        <FormSection>
          <SectionTitle>Контактные данные</SectionTitle>
          <InputGroup>
            <Input type="text" placeholder="Имя" />
            <Input type="tel" placeholder="Телефон" />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Адрес доставки</SectionTitle>
          <InputGroup>
            <Input type="text" placeholder="Улица" />
            <Input type="text" placeholder="Дом" />
            <Input type="text" placeholder="Квартира" />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Время доставки</SectionTitle>
          <InputGroup>
            <Input type="time" />
            <Input type="date" />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Комментарий к заказу</SectionTitle>
          <Textarea placeholder="Дополнительная информация..." />
        </FormSection>

        <ButtonGroup>
          <CancelButton onClick={onClose}>Отмена</CancelButton>
          <SubmitButton>Подтвердить заказ</SubmitButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: ${rem(40)} ${rem(24)};
  max-width: ${rem(500)};
  margin: 0 auto;
  max-height: ${rem(600)};
  overflow-y: auto;
  ${hideScrollbars}
`;

const Title = styled.h2`
  font-size: ${rem(28)};
  font-weight: 600;
  margin-bottom: ${rem(32)};
  text-align: center;
  color: ${colors.black};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(12)};
`;

const SectionTitle = styled.h3`
  font-size: ${rem(18)};
  font-weight: 600;
  color: ${colors.black};
  margin: 0;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${rem(12)};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: ${rem(12)} ${rem(16)};
  border: 2px solid ${colors.gray};
  border-radius: ${rem(8)};
  font-size: ${rem(16)};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${colors.orange};
  }

  &::placeholder {
    color: ${colors.silver};
  }
`;

const Textarea = styled.textarea`
  padding: ${rem(12)} ${rem(16)};
  border: 2px solid ${colors.gray};
  border-radius: ${rem(8)};
  font-size: ${rem(16)};
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
  min-height: ${rem(80)};

  &:focus {
    border-color: ${colors.orange};
  }

  &::placeholder {
    color: ${colors.silver};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${rem(16)};
  justify-content: center;
  margin-top: ${rem(16)};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CancelButton = styled.button`
  background: ${colors.gray};
  color: ${colors.black};
  border: none;
  padding: ${rem(14)} ${rem(24)};
  border-radius: ${rem(8)};
  cursor: pointer;
  font-size: ${rem(16)};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.silver};
  }
`;

const SubmitButton = styled.button`
  background: ${colors.orange};
  color: white;
  border: none;
  padding: ${rem(14)} ${rem(24)};
  border-radius: ${rem(8)};
  cursor: pointer;
  font-size: ${rem(16)};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.darkOrange};
  }
`;

export default PopupDelivery;
