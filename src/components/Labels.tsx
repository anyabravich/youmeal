import Container from "./Container";
import Label from "./Label";
import { rem } from "polished";
import styled from "styled-components";
import { useLabel } from "./LabelContext";

const LabelsData = [
  { icon: "burger", text: "Бургеры" },
  { icon: "snacks", text: "Закуски" },
  { icon: "hot-dog", text: "Хот-доги" },
  { icon: "combo", text: "Комбо" },
  { icon: "shaurma", text: "Шаурма" },
  { icon: "pizza", text: "Пицца" },
  { icon: "vok", text: "Вок" },
  { icon: "desert", text: "Десерты" },
  { icon: "sauces", text: "Соусы" },
];

const Labels: React.FC = () => {
  const { selectedLabel, setSelectedLabel } = useLabel();
  const handleLabelClick = (text: string) => {
    setSelectedLabel(text === selectedLabel ? null : text);
  };

  return (
    <LabelsContainer>
      <Container>
        <LabelsList>
          {LabelsData.map(({ icon, text }) => (
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LabelsItem = styled.li``;

export default Labels;
