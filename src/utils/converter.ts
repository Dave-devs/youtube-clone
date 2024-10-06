export const valueConverter = (value: string | number | null | undefined) => {
  const numericValue =
    typeof value === "number" ? value : parseFloat(String(value));

  // Handle the case when the value is NaN
  if (isNaN(numericValue)) {
    return value;
  }

  if (numericValue >= 1000000) {
    return `${(numericValue / 1000000).toFixed(1)}M`;
  } else if (numericValue >= 1000) {
    return `${(numericValue / 1000).toFixed(1)}K`;
  } else {
    return value;
  }
};

