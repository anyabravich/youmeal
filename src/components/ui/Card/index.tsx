import styled from "styled-components";

import { rem } from "polished";
import { colors } from "../../../styles/theme";
import Button from "../../ui/Button";
import { ICardPopup } from "./types";

const Card = ({
  id,
  image,
  price,
  title,
  weight,
  category,
  isAdded,
  addToBasket,
  onOpenPopup,
}: ICardPopup) => {
  return (
    <CardContainer>
      <ImageWrapper onClick={onOpenPopup}>
        <CardImage src={image} alt={title} />
      </ImageWrapper>

      <CardPrice className="text-big">{price}₽</CardPrice>

      <CardTitle className="text">{title}</CardTitle>

      <CardWeight>
        {weight >= 1000 ? weight / 1000 + "кг" : weight + "г."}
      </CardWeight>

      <Button
        state={isAdded ? "primary secondary" : undefined}
        onClick={() =>
          !isAdded &&
          addToBasket &&
          addToBasket({ id, image, price, title, weight, category })
        }
      >
        {isAdded ? "Добавлено" : "Добавить"}
      </Button>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  padding: ${rem(12)};
  border-radius: ${rem(18)};
  background: ${colors.white};
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  aspect-ratio: 276 / 220;
  border-radius: ${rem(12)};
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardPrice = styled.p`
  margin-block: ${rem(16)} ${rem(8)};
`;

const CardTitle = styled.p`
  margin-bottom: ${rem(29)};
`;

const CardWeight = styled.p`
  color: ${colors.silver};
  margin-bottom: ${rem(6)};
`;

export default Card;
