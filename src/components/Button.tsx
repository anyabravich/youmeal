import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButton) => {
  return (
    <ButtonContainer className={`button ${className}`} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  height: ${rem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${rem(16)};
  border-radius: ${rem(12)};
  background: ${colors.gray};
  transition: all 0.3s ease-in-out;
  color: ${colors.black};
  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
    transition: all 0.3s ease-in-out;
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
