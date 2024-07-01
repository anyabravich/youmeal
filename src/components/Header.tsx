import styled from "styled-components";
import { colors } from "../assets/styles/theme";
import { rem } from "polished";

const Header = () => {
  return <HeaderBox>Header</HeaderBox>;
};

const HeaderBox = styled.div`
  width: 100%;
  height: ${rem(60)};
  color: white;
  background-color: ${colors.black};
`;

export default Header;
