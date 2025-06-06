import styled from "styled-components";

import { rem } from "polished";
import { colors } from "../../styles/theme";
import { useQuantity } from "./hooks/useQuantity";

const Quantity = () => {
  const { count, increment, decrement } = useQuantity();

  return (
    <QuantityContainer>
      <QuantityButton type="button" onClick={decrement}>
        -
      </QuantityButton>

      <QuantityValue>{count}</QuantityValue>

      <QuantityButton type="button" onClick={increment}>
        +
      </QuantityButton>
    </QuantityContainer>
  );
};

const QuantityContainer = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: ${rem(8)};
  background: ${colors.gray};
  border-radius: ${rem(12)};
`;

const QuantityButton = styled.button`
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

const QuantityValue = styled.output`
  font-size: ${rem(16)};
`;

export default Quantity;
