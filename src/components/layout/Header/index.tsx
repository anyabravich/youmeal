import styled from "styled-components";

import { rem } from "polished";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/images/logo.svg" alt="Логотип" aria-label="Логотип" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  margin-bottom: ${rem(20)};
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: ${rem(153)};
`;

export default Header;
