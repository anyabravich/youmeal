import styled from "styled-components";

import { rem } from "polished";
import { breakpoints } from "../../../styles/theme";
import { PropsWithChildren } from "react";

const Container = ({ children, ...props }: PropsWithChildren) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  --container-max-width: ${rem(1440)};
  --container-padding: ${rem(75)};

  margin: 0 auto;
  width: min(var(--container-max-width), 100% - (var(--container-padding) * 2));

  @media (max-width: ${breakpoints.laptop}px) {
    --container-padding: ${rem(32)};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    --container-padding: ${rem(64)};
  }
`;

export default Container;
