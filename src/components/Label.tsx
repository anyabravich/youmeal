// Label.js
import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../assets/styles/theme";

interface ILabel {
  icon: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Label = ({ icon, text, isActive, onClick }: ILabel) => {
  return (
    <LabelContainer
      type="button"
      className={isActive ? "_active" : ""}
      onClick={onClick}
    >
      <LabelImage src={`/images/labels/${icon}.png`} alt={icon} />
      <LabelText className="text">{text}</LabelText>
    </LabelContainer>
  );
};

const LabelContainer = styled.button`
  display: flex;
  gap: ${rem(8)};
  align-items: center;
  padding: ${rem(8)} ${rem(14)};
  border-radius: ${rem(50)};
  height: ${rem(40)};
  background: ${colors.white};

  &._active {
    background: ${colors.lightOrange};
  }
`;

const LabelImage = styled.img`
  --size: ${rem(24)};
  width: var(--size);
  height: var(--size);
`;

const LabelText = styled.p`
  white-space: nowrap;
`;

export default Label;
