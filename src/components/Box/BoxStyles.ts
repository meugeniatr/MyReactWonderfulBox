import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../constants";
import ArrowIcon from "../../images/ArrowIcon";

const slide = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.div<{
  backgroundColor: "light" | "dark";
  section: "top" | "bottom";
}>`
  display: flex;
  flex-direction: ${(p) => (p.section === "top" ? "row" : "column")};
  justify-content: flex-start;
  padding: 20px 40px;
  margin-bottom: ${(p) => p.section === "top" && "2px"};
  border-radius: ${(p) =>
    p.section === "top" ? "5px 5px 0 0" : "0 0 5px 5px"};
  background-color: ${(p) =>
    p.backgroundColor === "light" ? "white" : "black"};
  width: clamp(100px, 95%, 600px);
  color: var(--textDark);
  text-transform: ${(p) => p.section === "top" && "uppercase"};
  font-weight: ${(p) => (p.section === "top" ? 700 : 400)};
  font-size: var(--font-size-normal);
  animation: ${slide} 1000ms;

  @media ${QUERIES.laptopAndUp} {
    width: 600px;
  }
`;

const StyledArrow = styled(ArrowIcon)`
  width: 1rem;
  margin-right: 8px;
`;

const StyledLink = styled.a<{ linkColor: string }>`
  color: ${(props) => props.linkColor};
  font-weight: 800;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 20px;
`;
export { StyledWrapper, StyledBox, StyledArrow, StyledLink };
