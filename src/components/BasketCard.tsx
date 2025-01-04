import styled from "styled-components";
import { rem } from "polished";
import Quantity from "./Quantity";
import { breakpoints, colors } from "../styles/theme";
import { ICard } from "../types";
import { formatWeight } from "../utils/formatWeight";

interface BasketCardProps extends ICard {
  count: number;
  setCount: (id: number, count: number) => void;
}

const BasketCard: React.FC<BasketCardProps> = ({
  title,
  weight,
  price,
  image,
  count,
  id,
  setCount,
}: ICard) => {
  const handleSetCount = (newCount: number) => {
    if (setCount) {
      setCount(id, newCount);
    }
  };

  return (
    <BasketCardContainer>
      <BasketCardImageContainer>
        <BasketCardImage
          src={`/images/cards/${image}.jpg`}
          alt="Картинка товара"
        />
      </BasketCardImageContainer>
      <BasketCardContent>
        <BasketCardTitle>{title}</BasketCardTitle>
        <BasketCardWeight>{formatWeight(weight)}</BasketCardWeight>
        <BasketCardPrice className="price">{price}₽</BasketCardPrice>
      </BasketCardContent>
      <Quantity count={count} setCount={handleSetCount} />
    </BasketCardContainer>
  );
};

const BasketCardContainer = styled.article`
  display: grid;
  align-items: flex-start;
  gap: ${rem(6)};
  grid-template-columns: ${rem(64)} 1fr ${rem(84)};
  padding-block: ${rem(14)};
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
  box-sizing: border-box;
`;

const BasketCardImageContainer = styled.div`
  width: ${rem(64)};
  height: ${rem(52)};
  border-radius: ${rem(12)};
  overflow: hidden;
  border-radius: ${rem(8)};
`;

const BasketCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BasketCardContent = styled.div`
  font-size: ${rem(12)};
  line-height: normal;
`;

const BasketCardTitle = styled.p`
  margin-bottom: ${rem(1)};
`;

const BasketCardWeight = styled.p`
  color: ${colors.silver};
  margin-bottom: ${rem(4)};
`;

const BasketCardPrice = styled.p``;

export default BasketCard;
