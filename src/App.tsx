import { useState } from "react";

import Helmet from "react-helmet";
import GlobalStyles from "./layout/GlobalStyles";
import Box from "./components/Box/Box";
import { StyledShopIcon, StyledCrowdIcon, BoxesWrapper } from "./AppStyles";
import { COLORS } from "./constants";

interface IBoxes {
  title: string;
  icon: JSX.Element;
  bgColor: string;
  bgColorLight: string;
}

const typeMarketplace: IBoxes = {
  title: "Marketplace",
  icon: <StyledShopIcon />,
  bgColor: COLORS.marketPlace,
  bgColorLight: COLORS.marketPlaceLight
};

const typeCrowfunding: IBoxes = {
  title: "Crowfunding",
  icon: <StyledCrowdIcon />,
  bgColor: COLORS.crowdPlace,
  bgColorLight: COLORS.crowdPlaceLight
};

export default function App() {
  const [boxes, setBoxes] = useState<IBoxes[]>([typeMarketplace]);

  const addBox = (title: string) => {
    let nextType = typeCrowfunding;
    if (title === "Crowfunding") nextType = typeMarketplace;
    setBoxes([
      ...boxes,
      {
        title: nextType.title,
        icon: nextType.icon,
        bgColor: nextType.bgColor,
        bgColorLight: nextType.bgColorLight
      }
    ]);
  };

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BoxesWrapper>
        {boxes.map((box, i) => (
          <Box
            backgroundColor="light"
            boxTitle={box.title}
            icon={box.icon}
            onClick={() => addBox(box.title)}
            bgColor={box.bgColor}
            bgColorLight={box.bgColorLight}
            key={box.title + i}
          />
        ))}
      </BoxesWrapper>
      <GlobalStyles />
    </>
  );
}
