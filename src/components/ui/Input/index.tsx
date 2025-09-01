import styled from "styled-components";
import { rem } from "polished";
import { IInput } from "./types";
import { colors } from "../../../styles/theme";

const Input = ({
  label,
  error,
  onChange,
  className,
  placeholder,
  value,
  type = "text",
  ...props
}: IInput) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  return (
    <Container className={`input ${className} ${error ? "_error" : ""}`}>
      {label && <Label>{label}</Label>}
      <InputField
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
  width: 100%;

  &._error {
    .input-field {
      border-color: ${colors.orange};
    }
  }
`;

const Label = styled.label`
  font-size: ${rem(14)};
  font-weight: 600;
  color: ${colors.black};
  line-height: 1.2;
`;

const InputField = styled.input`
  width: 100%;
  height: ${rem(40)};
  padding: ${rem(12)};
  border: 1px solid ${colors.gray};
  border-radius: ${rem(12)};
  font-size: ${rem(12)};
  font-family: inherit;
  background: ${colors.white};
  color: ${colors.black};
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: ${colors.silver};
  }

  &:focus {
    outline: none;
    border-color: ${colors.orange};
  }

  &:hover {
    border-color: ${colors.lightOrange};
  }
`;

const ErrorMessage = styled.span`
  font-size: ${rem(12)};
  color: ${colors.orange};
  line-height: 1.2;
`;

export default Input;
