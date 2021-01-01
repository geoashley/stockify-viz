export function convertToRepresentation(labelValue: string) {
  // Eleven Zeroes for Trillion
  return Math.abs(Number(labelValue)) >= 1.0e11
    ? (Math.abs(Number(labelValue)) / 1.0e11).toFixed(2) + " T"
      // Nine Zeroes for Billions
    : Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + " B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + " M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + " K"
    : Math.abs(Number(labelValue)).toFixed;
}
