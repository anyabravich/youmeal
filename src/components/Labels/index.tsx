import styled from "styled-components";

import Container from "../Container";
import Label from "../Label";
import { rem } from "polished";
import { useLabel } from "../LabelContext";
import { LABELS } from "./data";

const Labels = () => {
  const { selectedLabel, setSelectedLabel } = useLabel();

  const handleLabelClick = (text: string) => {
    setSelectedLabel(text === selectedLabel ? null : text);
  };

  return (
    <LabelsContainer>
      <Container>
        <LabelsList>
          {LABELS.map(({ icon, text }) => (
            <li key={text}>
              <Label
                icon={icon}
                text={text}
                isActive={text === selectedLabel}
                onClick={() => handleLabelClick(text)}
              />
            </li>
          ))}
        </LabelsList>
      </Container>
    </LabelsContainer>
  );
};

const LabelsContainer = styled.section`
  margin-bottom: ${rem(50)};
`;

const LabelsList = styled.ul`
  display: flex;
  gap: ${rem(24)};
  overflow: auto;
  padding: 0 var(--container-padding);
  margin: 0 calc(var(--container-padding) * -1);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Labels;
