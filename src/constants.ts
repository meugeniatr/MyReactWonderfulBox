const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

const COLORS = {
  marketPlace: "hsl(13, 76%, 64%)",
  marketPlaceLight: "hsl(11, 76%, 62%)",
  white: "hsl(0deg 0% 100%)",
  crowdPlace: "hsl(240deg 100% 60%)",
  crowdPlaceLight: "hsl(235deg 100% 62%)"
};

export { BREAKPOINTS, QUERIES, COLORS };
