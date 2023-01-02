export const generateKey = (pre?: string) => {
  return `${pre || "key"}_${new Date().getTime()}`;
};
