import styled from "styled-components";

import { rem } from "polished";
import { IButton } from "./types";
import { colors } from "../../../styles/theme";

const Button = ({ children, className, data, onClick }: IButton) => {
  return (
    <Container
      className={`button ${className}`}
      onClick={() => onClick?.(data)}
      type="button"
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

  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
  }

  &._orange {
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

  &._added {
    pointer-events: none;
  }
`;

export default Button;
