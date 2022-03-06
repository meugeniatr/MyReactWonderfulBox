import styled from "styled-components";
import ShopIcon from "./images/ShopIcon";
import CrowdIcon from "./images/CrowdIcon";

const StyledShopIcon = styled(ShopIcon)`
  width: 1rem;
  margin-right: 8px;
`;

const StyledCrowdIcon = styled(CrowdIcon)`
  width: 1rem;
  margin-right: 8px;
`;

const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 100%;
`;

export { StyledShopIcon, StyledCrowdIcon, BoxesWrapper };
