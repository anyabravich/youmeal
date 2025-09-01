import styled from "styled-components";

import { rem } from "polished";
import { breakpoints, colors } from "../../../styles/theme";
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

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${rem(4)};
  }
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  aspect-ratio: 276 / 220;
  border-radius: ${rem(12)};
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}px) {
    aspect-ratio: 137 / 120;
    border-radius: ${rem(8)};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardPrice = styled.p`
  margin-block: ${rem(16)} ${rem(8)};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-block: ${rem(10)} ${rem(4)};
    font-size: ${rem(16)};
  }
`;

const CardTitle = styled.p`
  margin-bottom: ${rem(29)};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-bottom: ${rem(14)};
    font-size: ${rem(12)};
  }
`;

const CardWeight = styled.p`
  color: ${colors.silver};
  margin-bottom: ${rem(6)};

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${rem(12)};
    margin-bottom: ${rem(8)};
  }
`;

export default Card;
