const fontScale = window.devicePixelRatio;
const RFS = (size) => size / fontScale;

function cross(val1, val2) {
  return navigator.platform === "Android" ? val1 : val2;
}

const isIos = navigator.platform === "iPhone" || navigator.platform === "iPad";

const screenHeightFigma = 800;
const screenWidthFigma = 360;

const ScreenWidth = window.innerWidth;
const ScreenHeight = window.innerHeight;

function calcHeight(height) {
  return parseFloat(((ScreenHeight * height) / screenHeightFigma).toFixed(2));
}

function calcWidth(width) {
  return parseFloat(((ScreenWidth * width) / screenWidthFigma).toFixed(2));
}

const Colors = {
  offwhite: "#EEEEEE",
  greenprimary: "#23C69E",
  white: "#FFFFFF",
  black: "#1E1F22",
  grey: "#3F424A",
  darkgrey:"#28303F",
  lightfrey:"#4B4F5B",
  green: "#0FB90C"
};

export { RFS, cross, isIos, calcHeight, calcWidth, Colors };
