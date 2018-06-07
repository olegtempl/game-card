/*
    Walk the cards
*/
/*
  Получаем текущий айди.
    + 1 k id - в право
    -1 k id -  в лево.
    + 4 k id  - вниз
    -4 k id - в верх
  */

const left = () => {},
      right = () => {},
      up = () => {},
      down = () => {};

const go = {
  left,
  right,
  down,
  up
};

export { go };