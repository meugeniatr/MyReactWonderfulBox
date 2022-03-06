import { FC, ReactElement } from "react";
import { StyledWrapper, StyledBox, StyledLink, StyledArrow } from "./BoxStyles";
import Button from "../Button/Button";

interface IBox {
  backgroundColor: "light" | "dark";
  boxTitle?: string;
  icon?: any;
  onClick: () => void;
  bgColor: string;
  bgColorLight: string;
}

// Component
const Box: FC<IBox> = ({
  backgroundColor,
  boxTitle,
  icon,
  onClick,
  bgColor,
  bgColorLight
}): ReactElement<any, any> => {
  return (
    <StyledWrapper>
      <StyledBox backgroundColor={backgroundColor} section="top">
        {icon}
        Quickstart {boxTitle}
      </StyledBox>
      <StyledBox backgroundColor={backgroundColor} section="bottom">
        <p>
          Launching your {boxTitle}? Use this guide to understand the workflow
          and basic.
        </p>
        <StyledLink
          href="/"
          rel="noopener, norefer"
          target="_blank"
          linkColor={bgColor}
        >
          <StyledArrow />
          Quickstart {boxTitle}
        </StyledLink>
      </StyledBox>
      <Button
        variant="fill"
        onClick={onClick}
        bgColor={bgColor}
        bgColorLight={bgColorLight}
      >
        Add a box
      </Button>
    </StyledWrapper>
  );
};

export default Box;
