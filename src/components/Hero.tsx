import Container from "./Container";
import styled from "styled-components";
import { rem } from "polished";
import Header from "./Header";
import { colors } from "../assets/styles/theme";

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
          <div>
            <HeroTitle className="h1">
              Только самые <span>сочные бургеры!</span>
            </HeroTitle>
            <HeroText className="text">
              Бесплатная доставка от <span>599₽</span>
            </HeroText>
          </div>
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
`;

const HeroInner = styled.div`
  display: grid;
  justify-content: center;
  gap: ${rem(21)};
  grid-template-columns: ${rem(326)} minmax(auto, ${rem(437)});
`;

const HeroImage = styled.img``;

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
