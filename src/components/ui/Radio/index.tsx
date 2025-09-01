import styled from "styled-components";
import { rem } from "polished";
import { IRadio } from "./types";
import { colors } from "../../../styles/theme";

const Radio = ({
  label,
  checked,
  onChange,
  name,
  value,
  className,
  disabled,
  ...props
}: IRadio) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  return (
    <Container className={`radio ${className} ${disabled ? "_disabled" : ""}`}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <RadioButton checked={checked || false} disabled={disabled}>
        <RadioDot checked={checked || false} />
      </RadioButton>
      {label && <Label disabled={disabled}>{label}</Label>}
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  cursor: pointer;
  user-select: none;

  &._disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const RadioButton = styled.div<{ checked: boolean; disabled?: boolean }>`
  --size: ${rem(12)};
  width: var(--size);
  height: var(--size);
  border: 1px solid ${(props) => (props.checked ? colors.orange : colors.gray)};
  border-radius: 100vmax;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  transition: border-color 0.3s ease-in-out;

  ${(props) =>
    !props.disabled &&
    `
    &:hover {
      border-color: ${props.checked ? colors.darkOrange : colors.lightOrange};
    }
  `}
`;

const RadioDot = styled.div<{ checked: boolean }>`
  --size: ${rem(6)};
  width: var(--size);
  height: var(--size);

  border-radius: 100vmax;
  background: ${(props) => (props.checked ? colors.orange : "transparent")};
  transition: background 0.3s ease-in-out;
`;

const Label = styled.span<{ disabled?: boolean }>`
  font-size: ${rem(12)};
  color: ${(props) => (props.disabled ? colors.silver : colors.black)};
  line-height: 1.2;
`;

export default Radio;
