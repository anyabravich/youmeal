import { useState } from "react";
import Container from "./Container";
import Label from "./Label";
import { rem } from "polished";
import styled from "styled-components";

const LabelsData = [
  {
    icon: "burger",
    text: "Бургеры",
  },
  {
    icon: "snacks",
    text: "Закуски",
  },
  {
    icon: "hot-dog",
    text: "Хот-доги",
  },
  {
    icon: "combo",
    text: "Комбо",
  },
  {
    icon: "shaurma",
    text: "Шаурма",
  },
  {
    icon: "pizza",
    text: "Пицца",
  },
  {
    icon: "vok",
    text: "Вок",
  },
  {
    icon: "desert",
    text: "Десерты",
  },
  {
    icon: "sauces",
    text: "Соусы",
  },
];

const Labels = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const handleLabelClick = (text: string) => {
    setActiveLabel(text === activeLabel ? null : text);
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
                isActive={text === activeLabel}
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
