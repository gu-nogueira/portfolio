const Color = require("color");

// ** Utils

// ** Polyfilled 'requiredEnv' function
function requiredEnv(key) {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function generateColorPalette(baseColor) {
  const colorPalette = shadeRange.reduce((acc, shade) => {
    if (shade < 500) {
      const intensity = 1 - shade / 500;
      acc[shade] = `${Color(baseColor).lighten(intensity).hex().slice(0, 7)}`;
    } else {
      const intensity = shade / 500 - 1;
      acc[shade] = `${Color(baseColor).darken(intensity).hex().slice(0, 7)}`;
    }
    return acc;
  }, {});

  return colorPalette;
}

const customizedTheme = {
  // ** Define any color name with a HEX value (e.g. '#ffffff')
  shadeColors: {
    primary: "#e82e5b",
    secondary: "#003566",
    green: "#0bf46e",
    orange: "#ef572e",
    marine: "#06f9ca",
    text: "#003566",
    link: "",
    contrast: "",
  },
  staticColors: {
    fadeblue1: "#0097f7",
    fadeblue1: "#27f7d6",
    background: "#f2f5f7",
  },
};

const shadeRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const theme = {
  colors: {
    ...Object.fromEntries(
      Object.entries(customizedTheme.shadeColors).map(([name, value]) => [
        name,
        generateColorPalette(value),
      ]),
    ),
    ...customizedTheme.staticColors,
  },
};

module.exports = theme;
