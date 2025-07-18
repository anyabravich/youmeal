import styled from "styled-components";

import { rem } from "polished";
import Quantity from "../Quantity";
import { colors } from "../../styles/theme";
import { ICard } from "../../types";
import { formatWeight } from "../../utils/formatWeight";
import { FC } from "react";
import { BasketCardProps } from "./types";

const BasketCard: FC<BasketCardProps> = ({
  title,
  weight,
  price,
  image,
}: ICard) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="Картинка товара" />
      </ImageContainer>

      <Content>
        <Title>{title}</Title>

        <Weight>{formatWeight(weight)}</Weight>

        <p className="price">{price}₽</p>
      </Content>

      <Quantity />
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  align-items: flex-start;
  gap: ${rem(6)};
  grid-template-columns: ${rem(64)} 1fr ${rem(84)};
  padding-block: ${rem(14)};
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  width: ${rem(64)};
  height: ${rem(52)};
  border-radius: ${rem(12)};
  overflow: hidden;
  border-radius: ${rem(8)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  font-size: ${rem(12)};
  line-height: normal;
`;

const Title = styled.p`
  margin-bottom: ${rem(1)};
`;

const Weight = styled.p`
  color: ${colors.silver};
  margin-bottom: ${rem(4)};
`;

export default BasketCard;
