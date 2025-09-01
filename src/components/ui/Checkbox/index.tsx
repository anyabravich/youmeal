import styled from "styled-components";
import { rem } from "polished";
import { ICheckbox } from "./types";
import { colors } from "../../../styles/theme";

const Checkbox = ({
  label,
  checked,
  onChange,
  className,
  disabled,
  ...props
}: ICheckbox) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked, event);
  };

  return (
    <Container
      className={`checkbox ${className} ${disabled ? "_disabled" : ""}`}
    >
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <CheckboxButton checked={checked || false} disabled={disabled}>
        <CheckIcon checked={checked || false} />
      </CheckboxButton>
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

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxButton = styled.div<{ checked: boolean; disabled?: boolean }>`
  width: ${rem(20)};
  height: ${rem(20)};
  border: 2px solid ${(props) => (props.checked ? colors.orange : colors.gray)};
  border-radius: ${rem(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.checked ? colors.orange : colors.white)};
  transition: all 0.3s ease-in-out;

  ${(props) =>
    !props.disabled &&
    `
    &:hover {
      border-color: ${props.checked ? colors.darkOrange : colors.lightOrange};
      background: ${props.checked ? colors.darkOrange : colors.white};
    }
  `}
`;

const CheckIcon = styled.div<{ checked: boolean }>`
  width: ${rem(12)};
  height: ${rem(8)};
  border-left: 2px solid ${colors.white};
  border-bottom: 2px solid ${colors.white};
  transform: ${(props) =>
    props.checked
      ? "rotate(-45deg) translate(-2px, -2px)"
      : "rotate(-45deg) translate(-2px, -2px) scale(0)"};
  transition: transform 0.3s ease-in-out;
`;

const Label = styled.span<{ disabled?: boolean }>`
  font-size: ${rem(14)};
  color: ${(props) => (props.disabled ? colors.silver : colors.black)};
  line-height: 1.2;
`;

export default Checkbox;
