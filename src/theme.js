export const theme = {
  colors: {
    primary: "#009ae0",
    secondary: "#d7dee3",
    greyPrimary: "#979797",
    greySecondary: "#F5F5F5",
    greenPrimary: "#34C176",
    greenSecondary: "#ECFFF6",
    redPrimary: "#ff6363",
    redSecondary: "#FFECEC",
    white: "#fff",
    black: "#000"
  },
  fontSizes: {
    giant: "2rem",
    large: "1.6rem",
    big: "1.4rem",
    regular: "1.2rem",
    small: "1rem",
    tiny: "0.8rem"
  }
};

export const getColor = color => props => props.theme.colors[color];
