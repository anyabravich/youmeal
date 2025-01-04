import Container from "./Container";
import Label from "./Label";
import { rem } from "polished";
import styled from "styled-components";
import { useLabel } from "./LabelContext";
import { labels } from "../mock/labels";

const Labels: React.FC = () => {
  const { selectedLabel, setSelectedLabel } = useLabel();
  const handleLabelClick = (text: string) => {
    setSelectedLabel(text === selectedLabel ? null : text);
  };

  return (
    <LabelsContainer>
      <Container>
        <LabelsList>
          {labels.map(({ icon, text }) => (
            <LabelsItem key={text}>
              <Label
                icon={icon}
                text={text}
                isActive={text === selectedLabel}
                onClick={() => handleLabelClick(text)}
              />
            </LabelsItem>
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

const LabelsItem = styled.li``;

export default Labels;
