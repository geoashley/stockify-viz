export function convertToRepresentation(labelValue: string) : string{
  // twele Zeroes for Trillion
  return Math.abs(Number(labelValue)) >= 1.0e12
    ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2).toString() + " T"
      // Nine Zeroes for Billions
    : Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2).toString() + " B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2).toString() + " M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2).toString() + " K"
    : Math.abs(Number(labelValue)).toFixed().toString();
}
