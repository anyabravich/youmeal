import styled from "styled-components";

import { rem } from "polished";
import { colors } from "../../../styles/theme";
import { IQuantity } from "./types";
import Button from "../Button";

const Quantity = ({ count, onIncrement, onDecrement }: IQuantity) => {
  const handleButtonClick = (callback: () => void) => {
    callback();
  };

  return (
    <Container>
      <QuantityButton
        type="button"
        onClick={() => handleButtonClick(onDecrement)}
        className="quantity-button"
      >
        -
      </QuantityButton>

      <Value>{count}</Value>

      <QuantityButton
        type="button"
        onClick={() => handleButtonClick(onIncrement)}
        className="quantity-button"
      >
        +
      </QuantityButton>
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

const QuantityButton = styled(Button)`
  width: ${rem(40)};
  height: ${rem(40)};
  background: transparent;
  border: none;

  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
  }
`;

const Value = styled.output`
  font-size: ${rem(16)};
`;

export default Quantity;
