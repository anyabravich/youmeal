import styled from "styled-components";

import { rem } from "polished";
import { IButton } from "./types";
import { breakpoints, colors } from "../../../styles/theme";

const Button = ({
  children,
  className,
  state,
  data,
  onClick,
  ...props
}: IButton) => {
  return (
    <Container
      className={`button ${className || ""} ${state || ""}`}
      onClick={() => onClick?.(data)}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.button`
  height: ${rem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${rem(16)};
  border-radius: ${rem(12)};
  background: ${colors.gray};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  color: ${colors.black};

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${rem(12)};
    height: ${rem(30)};
    border-radius: ${rem(8)};
    font-weight: 400;
  }

  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
  }

  &.primary {
    background: ${colors.orange};
    color: ${colors.white};

    &:hover {
      background: ${colors.darkOrange};
    }
  }

  &._disabled {
    pointer-events: none;
    opacity: 0.2;
  }

  &.secondary {
    pointer-events: none;
  }
`;

export default Button;
