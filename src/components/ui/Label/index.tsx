import styled from "styled-components";
import { rem } from "polished";
import { breakpoints, colors } from "../../../styles/theme";
import { ILabel } from "./types";

const Label = ({ icon, text, isActive, onClick }: ILabel) => {
  return (
    <Container
      type="button"
      className={isActive ? "_active" : ""}
      onClick={onClick}
    >
      <Image src={`/images/labels/${icon}.png`} alt={icon} />

      <Text className="text">{text}</Text>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  gap: ${rem(8)};
  align-items: center;
  padding: ${rem(8)} ${rem(14)};
  border-radius: ${rem(50)};
  height: ${rem(40)};
  background: ${colors.white};

  &._active {
    background: ${colors.lightOrange};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${rem(3)} ${rem(8)};
    height: ${rem(30)};
  }
`;

const Image = styled.img`
  --size: ${rem(24)};

  width: var(--size);
  height: var(--size);
`;

const Text = styled.span`
  white-space: nowrap;
`;

export default Label;
