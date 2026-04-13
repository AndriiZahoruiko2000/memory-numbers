export const getRandomNumber = (len: number) => {
  const arr = [];

  for (let i = 0; i < len; i += 1) {
    const randomNum = Math.round(Math.random() * 9);
    arr.push(randomNum);
  }
  return arr.join("");
};
