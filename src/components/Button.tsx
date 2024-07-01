import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";

interface IButton {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IButton) => {
  return (
    <ButtonContainer className={`button ${className}`}>
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
  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
    transition: all 0.3s ease-in-out;
  }
`;

export default Button;