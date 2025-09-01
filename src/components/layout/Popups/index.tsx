import styled from "styled-components";
import { colors } from "../../../styles/theme";
import { rem } from "polished";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import Icons from "../../ui/Icons";
import PopupProduct from "./components/PopupProduct";
import { useRef } from "react";
import { IPopups, PopupType } from "./types";
import PopupDelivery from "./components/PopupDelivery";
import { hideScrollbars } from "../../../styles/utils";

const Popups = ({
  isOpened,
  onClose,
  popupType,
  cardData,
  addToBasket,
  isAdded,
  currentQuantity,
  updateQuantity,
}: IPopups) => {
  const popupContainerRef = useRef(null);

  useBodyScrollLock(popupContainerRef, isOpened);
  useEscapeKey(onClose, isOpened);

  if (!isOpened) return null;

  const renderPopupContent = () => {
    switch (popupType) {
      case PopupType.PRODUCT:
        return (
          <PopupProduct
            cardData={cardData}
            addToBasket={addToBasket}
            isAdded={isAdded}
            onClose={onClose}
            currentQuantity={currentQuantity}
            updateQuantity={updateQuantity}
          />
        );
      case PopupType.DELIVERY:
        return <PopupDelivery onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Container ref={popupContainerRef} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Button type="button" onClick={onClose}>
          <Icons.Close />
        </Button>
        {renderPopupContent()}
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  padding-block: ${rem(150)};

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: ${rem(684)};
  height: auto;
  max-height: calc(100vh - ${rem(100)} * 2);
  background: ${colors.white};
  border-radius: ${rem(24)};
  overflow-y: auto;
  ${hideScrollbars}
`;

export const Button = styled.button`
  --icon-size: ${rem(24)};
  --position: ${rem(24)};

  position: absolute;
  top: var(--position);
  right: var(--position);
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

export default Popups;
