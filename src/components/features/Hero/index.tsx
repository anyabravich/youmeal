import styled from "styled-components";

import Container from "../../layout/Container";
import { rem } from "polished";
import Header from "../../layout/Header";
import { breakpoints, colors } from "../../../styles/theme";

const Hero = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Inner>
          <Image src="/images/burger.svg" alt="Бургер" aria-label="Бургер" />

          <Texts>
            <Title className="h1">
              Только самые <span>сочные бургеры!</span>
            </Title>

            <Text className="text">
              Бесплатная доставка от <span>599₽</span>
            </Text>
          </Texts>
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: ${colors.white};
  padding-top: ${rem(22)};
  min-height: ${rem(466)};
  background: url("/images/hero-bg.svg") no-repeat center 100%;
  background-size: cover;
  margin-bottom: ${rem(40)};

  @media (max-width: ${breakpoints.tablet}px) {
    min-height: ${rem(349)};
    margin-bottom: ${rem(30)};
  }
`;

const Inner = styled.div`
  display: grid;
  justify-content: center;
  gap: ${rem(21)};
  grid-template-columns: ${rem(326)} minmax(auto, ${rem(437)});

  @media (max-width: ${breakpoints.laptop}px) {
    grid-template-columns: ${rem(306)} minmax(auto, ${rem(437)});
  }

  @media (max-width: ${breakpoints.tablet}px) {
    gap: ${rem(10)};
    grid-template-columns: ${rem(227)} minmax(auto, ${rem(325)});
  }

  @media (max-width: ${breakpoints.mobile}px) {
    display: flex;
    align-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

const Image = styled.img`
  --size: ${rem(326)};

  width: var(--size);
  height: var(--size);

  @media (max-width: ${breakpoints.tablet}px) {
    --size: ${rem(227)};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    order: 1;
    margin: 0 auto;
  }
`;

const Texts = styled.div`
  margin-top: ${rem(40)};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-top: ${rem(22)};
  }
`;

const Title = styled.h1`
  position: relative;
  top: ${rem(4)};
  margin-bottom: ${rem(56)};

  span {
    color: ${colors.darkOrange};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: ${rem(325)};
    margin-bottom: ${rem(30)};
  }
`;

const Text = styled.p`
  span {
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${rem(12)};
  }
`;

export default Hero;
