/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints = ["1em", "30em", "45em", "64em", "80em", "86em", "100em"];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

// #endregion
// #region typography
export const fontSets = [
  {
    name: "heading",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "3rem",
    lineHeight: "4.5rem",
  },
  {
    name: "subheading",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "2.6rem",
    lineHeight: "3.9rem",
  },
  {
    name: "title",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "2.4rem",
    lineHeight: "3.6rem",
  },
  {
    name: "subtitle",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "2rem",
    lineHeight: "3rem",
  },
  {
    name: "medium-title",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
  },
  {
    name: "small",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
  },
  {
    name: "extra-small",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.3rem",
    lineHeight: "1.9rem",
  },
  {
    name: "xxsmall",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.2rem",
    lineHeight: "1.8rem",
  },
];
const fontMaps = fontSets.reduce(
  (fontMap, { name, alias = name, fontSize, lineHeight, fontWeight }, index) => {
    const fm = fontMap;
    fm.fontSizes[index] = fontSize;
    fm.fontSizes[name] = fontSize;
    fm.fontSizes[alias] = fontSize;
    fm.fontWeights[index] = fontWeight;
    fm.fontWeights[name] = fontWeight;
    fm.fontWeights[alias] = fontWeight;
    fm.lineHeights[name] = lineHeight;
    fm.lineHeights[alias] = lineHeight;
    return fm;
  },
  {
    fontFamily: {
      primary: "Barlow",
      bold: "Barlow-Bold",
      light: "Barlow-Light",
      extraLight: "Barlow-ExtraLight",
      medium: "Barlow-Medium",
      semibold: "Barlow-SemiBold",
      extrabold: "Barlow-ExtraBold",
      secondary: "Lora",
    },
    fontSizes: {},
    fontWeights: {
      extraLight: 100,
      light: 300,
      medium: 500,
      bold: 600,
      bolder: 700,
      extrabold: 800,
    },
    lineHeights: {},
  }
);
// #endregion
// #region colors
const colorSets = [
  {
    name: "primary",
    colors: [
      { name: 50, hex: "#0AC1EB" },
      { name: 100, hex: "#03B0E7" },
      { name: 200, hex: "#017FFA" },
      { name: 300, hex: "#1A6BE4" },
      { name: 400, hex: "#108AE6" },
      { name: 1000, hex: "#0B1741" },
    ],
  },
  {
    name: "blue",
    alias: "info",
    colors: [
      { name: 100, hex: "#17C1E8" },
      { name: 500, hex: "#006CFB" },
      { name: 600, hex: "#128BE5" },
    ],
  },

  {
    name: "red",
    alias: "danger",
    colors: [
      { name: 100, hex: "rgba(253, 120, 61, 1)" },
      { name: 500, hex: "#f44336" },
    ],
  },
  {
    name: "yellow",
    colors: [
      { name: 100, hex: "#FFC955" },
      { name: 600, hex: "#F2CB00" },
      { name: 700, hex: "#D4A373" },
    ],
  },
  {
    name: "purple",
    colors: [{ name: 500, hex: "#273466" }],
  },
  {
    name: "gray",
    colors: [
      { name: 50, hex: "#E5E5E5" },
      { name: 100, hex: "#E6E5EB" },
      { name: 200, hex: "#515151" },
      { name: 300, hex: "#808080" },
      { name: 400, hex: "rgba(73, 80, 87, 0.8)" },
      { name: 500, hex: "#89A1FF" },
      { name: 600, hex: "#6F6F6F" },
      { name: 700, hex: "#495057" },
      { name: 800, hex: "#6C757D" },
      { name: 900, hex: "#C4C4C4" },
      { name: 1000, hex: "#464646" },
    ],
  },
  {
    name: "darkgray",
    colors: [
      { name: 300, hex: "#2C3A4B" },
      { name: 400, hex: "#273240" },
      { name: 500, hex: "#0F1935" },
    ],
  },
];

const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors: colorSet }) => {
    const color = {};
    const cm = colorMap;
    for (let colorIndex = 0; colorIndex < colorSet.length; colorIndex++) {
      const { name: colorName, hex } = colorSet[colorIndex];
      color[colorIndex] = hex;
      color[colorName] = hex;
    }
    cm[name] = color;
    cm[alias] = color;
    return cm;
  },
  {
    // ...defaultTheme.colors,
    white: "#FFFFFF",
    "white.0": "#FFFFFF",
    black: "#000000",
    "black.0": "#000000",
  }
);

// #endregion
const radii = {
  small: "0.125rem",
  normal: "0.1875rem",
  large: "0.375rem",
  full: "10rem",
  square: 0,
};
const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};

const shadows = [
  { name: "none", shadow: undefined },
  { name: "sm", shadow: "0 .075rem .15rem rgba(0,0,0,.15)" },
  { name: "xl", shadow: "0 0 1rem rgba(0,0,0,.15)" },
].reduce((shadowSet, { name, shadow }, index) => {
  const s = shadowSet;
  s[name] = shadow;
  s[index] = shadow;
  return s;
});

export const theme = {
  // ...defaultTheme,
  breakpoints,
  radii,
  colors,
  zIndices,
  shadows,
  ...fontMaps,
};
