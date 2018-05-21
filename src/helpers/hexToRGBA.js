const hexToRGBA = (hex, alpha) => {
  const [red, green, blue] = hex
    .match(/[\d\w]{2}/g)
    .map(hexString => parseInt(hexString, 16));

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export default hexToRGBA;
