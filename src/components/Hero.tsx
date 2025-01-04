import Container from "./Container";
import styled from "styled-components";
import { rem } from "polished";
import Header from "./Header";
import { breakpoints, colors } from "../styles/theme";

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <Container>
        <HeroInner>
          <HeroImage
            src="/images/burger.svg"
            alt="Бургер"
            aria-label="Бургер"
          />
          <HeroTexts>
            <HeroTitle className="h1">
              Только самые <span>сочные бургеры!</span>
            </HeroTitle>
            <HeroText className="text">
              Бесплатная доставка от <span>599₽</span>
            </HeroText>
          </HeroTexts>
        </HeroInner>
      </Container>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  color: ${colors.white};
  padding-top: ${rem(22)};
  min-height: ${rem(466)};
  background: url("/images/hero-bg.svg") no-repeat center 100%;
  background-size: cover;
  margin-bottom: ${rem(40)};

  @media (max-width: ${breakpoints.tablet}px) {
    min-height: ${rem(349)};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    min-height: auto;
  }
`;

const HeroInner = styled.div`
  display: grid;
  justify-content: center;
  gap: ${rem(21)};
  grid-template-columns: ${rem(326)} minmax(auto, ${rem(437)});

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: ${rem(227)} minmax(auto, ${rem(437)});
  }

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    align-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

const HeroImage = styled.img`
  --size: ${rem(326)};
  width: var(--size);
  height: var(--size);

  @media (max-width: ${breakpoints.tablet}px) {
    --size: ${rem(227)};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    order: 1;
    margin: 0 auto;
  }
`;

const HeroTexts = styled.div`
  margin-top: ${rem(40)};
`;

const HeroTitle = styled.h1`
  position: relative;
  top: ${rem(4)};
  margin-bottom: ${rem(56)};

  span {
    color: ${colors.darkOrange};
  }
`;

const HeroText = styled.p`
  span {
    font-weight: 600;
  }
`;

export default Hero;
