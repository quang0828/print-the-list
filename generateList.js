const STRING = {
  Silentium: 'Silentium',
  IO: 'IO',
  SilentiumIO: 'SilentiumIO',
};

const defaultParams = {from: 1, to: 100, step: 1};

const isNumber = (value) => typeof value === 'number';

const generateList = (params = {}) => {
  const { from, to, step } = { ...defaultParams, ...params};

  if (!isNumber(from) || !isNumber(to) || !isNumber(step) || step <= 0) {
    return [];
  }

  const arr = [];
  for (let i = from; i <= to; i += step) {
    if (i % 4 === 0) {
      arr.push(STRING.Silentium);
    } else if (i % 7 === 0) {
      arr.push(STRING.IO);
    } else if (i % 3 === 0 & i % 5 === 0) {
      arr.push(STRING.SilentiumIO);
    } else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = generateList;
