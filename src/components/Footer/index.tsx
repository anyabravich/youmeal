import styled from "styled-components";

import Container from "../Container";
import { rem } from "polished";
import { breakpoints, colors } from "../../styles/theme";
import Icons from "../Icons";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterTop>
          <FooterLogo src="/images/logo-footer.svg" alt="YouMeal Logo" />
          <FooterContacts>
            <FooterContactsItem>
              <FooterContactsTitle>Номер для заказа</FooterContactsTitle>
              <FooterContactsLink href="tel:+79308333811">
                <FooterIconPhone src="/images/phone.svg" alt="Phone Icon" />
                <span>+7(930)833-38-11</span>
              </FooterContactsLink>
            </FooterContactsItem>
            <FooterContactsItem>
              <FooterContactsTitle>Мы в соцсетях</FooterContactsTitle>
              <FooterSocials>
                <li>
                  <FooterSocialsItemLink
                    href="https://vk.com"
                    target="_blank"
                    aria-label="VK"
                  >
                    <Icons.Vk />
                  </FooterSocialsItemLink>
                </li>
                <li>
                  <FooterSocialsItemLink
                    href="https://t.me"
                    target="_blank"
                    aria-label="Telegram"
                  >
                    <Icons.Telegram />
                  </FooterSocialsItemLink>
                </li>
              </FooterSocials>
            </FooterContactsItem>
          </FooterContacts>
        </FooterTop>
        <FooterCopyright>
          <span>&copy;&nbsp;YouMeal, {new Date().getFullYear()}</span>
          <span>Design: Anastasia Ilina</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${colors.white};
  padding-block: ${rem(46)} ${rem(40)};
  margin-top: auto;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${rem(32)};
  gap: ${rem(355)};

  @media (max-width: ${breakpoints.laptop}px) {
    gap: initial;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.img`
  display: block;
  width: ${rem(305)};

  @media (max-width: ${breakpoints.tablet}px) {
    width: ${rem(196)};
  }
`;

const FooterIconPhone = styled.img`
  display: block;
  width: ${rem(24)};
  height: ${rem(24)};
`;

const FooterContacts = styled.ul`
  display: flex;
  gap: ${rem(126)};
  position: relative;
  top: ${rem(6)};

  @media (max-width: ${breakpoints.laptop}px) {
    gap: ${rem(50)};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const FooterContactsItem = styled.li``;

const FooterContactsTitle = styled.p`
  margin-bottom: ${rem(24)};
  font-size: ${rem(24)};
  line-height: 1;
`;

const FooterContactsLink = styled.a`
  font-size: ${rem(16)};
  line-height: normal;
  text-decoration: none;
  color: ${colors.black};
  display: flex;
  gap: ${rem(4)};
`;

const FooterSocials = styled.ul`
  display: flex;
  gap: ${rem(16)};
`;

const FooterSocialsItemLink = styled.a`
  display: inline-block;
  fill: ${colors.orange};
`;

const FooterCopyright = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${rem(4)};
  font-size: ${rem(12)};
  line-height: normal;
`;

export default Footer;
