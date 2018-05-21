const hexToRGB = (hex, alpha) => {
  const [red, green, blue] = hex
    .match(/[\d\w]{2}/g)
    .map(
      hexString =>
        Math.round(Math.max(parseInt(hexString, 16))) + 255 * (1 - alpha),
      255
    );

  return `rgba(${red}, ${green}, ${blue})`;
};

export default hexToRGB;
