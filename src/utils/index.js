export const customTruncate = (text, num) =>
  text.length > num ? `${text.substring(0, num)}...` : text;
