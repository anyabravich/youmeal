import styled from "styled-components";
import { rem } from "polished";
import { ICard } from "../types";
import { colors } from "../styles/theme";
import Button from "./Button";

const Card = ({ image, price, title, weight }: ICard) => {
  return (
    <CardContainer>
      <CardImage src={`/images/cards/${image}.jpg`} alt={title} />
      <CardPrice className="text-big">{price}₽</CardPrice>
      <CardTitle className="text">{title}</CardTitle>
      <CardWeight>
        {weight >= 1000 ? weight / 1000 + "кг" : weight + "г."}
      </CardWeight>
      <Button>Добавить</Button>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  padding: ${rem(12)};
  border-radius: ${rem(18)};
  background: ${colors.white};
`;

const CardImage = styled.img`
  width: 100%;
  height: ${rem(220)};
  border-radius: ${rem(12)};
  object-fit: cover;
`;

const CardPrice = styled.p`
  margin-block: ${rem(10)} ${rem(8)};
`;

const CardTitle = styled.p`
  margin-bottom: ${rem(29)};
`;

const CardWeight = styled.p`
  color: ${colors.silver};
  margin-bottom: ${rem(6)};
`;

export default Card;
