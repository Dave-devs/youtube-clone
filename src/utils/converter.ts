export const valueConverter = (value: string) => {
  const numericValue = parseFloat(value);
  if (numericValue >= 1000000) {
    return `${(numericValue / 1000000).toFixed(1)}M`;
    // Math.floor(numericValue/ 1000000)+"M"
  } else if (numericValue >= 1000) {
    return `${(numericValue / 1000).toFixed(1)}K`;
  } else {
    return value;
  }
};
