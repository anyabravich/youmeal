import styled from "styled-components";

import { rem } from "polished";
import { breakpoints, colors } from "../../../styles/theme";
import { IQuantity } from "./types";
import Button from "../Button";

const Quantity = ({
  count,
  onIncrement,
  onDecrement,
  className,
}: IQuantity) => {
  const handleButtonClick = (callback: () => void) => {
    callback();
  };

  return (
    <Container className={className}>
      <QuantityButton
        type="button"
        onClick={() => handleButtonClick(onDecrement)}
        className="quantity-button"
      >
        -
      </QuantityButton>

      <Value className="quantity-value">{count}</Value>

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

  @media (max-width: ${breakpoints.tablet}px) {
    border-radius: ${rem(8)};
  }
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

  @media (max-width: ${breakpoints.tablet}px) {
    width: ${rem(30)};
    height: ${rem(30)};
  }
`;

const Value = styled.output`
  font-size: ${rem(16)};

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${rem(12)};
  }
`;

export default Quantity;
