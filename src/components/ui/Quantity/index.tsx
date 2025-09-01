import styled from "styled-components";

import { rem } from "polished";
import { colors } from "../../../styles/theme";
import { IQuantity } from "./types";

const Quantity = ({ count, onIncrement, onDecrement }: IQuantity) => {
  const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
    e.stopPropagation();
    callback();
  };

  return (
    <Container>
      <Button type="button" onClick={(e) => handleButtonClick(e, onDecrement)}>
        -
      </Button>

      <Value>{count}</Value>

      <Button type="button" onClick={(e) => handleButtonClick(e, onIncrement)}>
        +
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: ${rem(8)};
  background: ${colors.gray};
  border-radius: ${rem(12)};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(40)};
  height: ${rem(40)};
  font-size: ${rem(16)};
  border-radius: ${rem(12)};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
    transition: all 0.3s ease-in-out;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`;

const Value = styled.output`
  font-size: ${rem(16)};
`;

export default Quantity;
