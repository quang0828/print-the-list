const generateList = require('./generateList');

const defaultOutputData = [
  1,           2,           3,           'Silentium', 5,
  6,           'IO',        'Silentium', 9,           10,
  11,          'Silentium', 13,          'IO',        'SilentiumIO',
  'Silentium', 17,          18,          19,          'Silentium',
  'IO',        22,          23,          'Silentium', 25,
  26,          27,          'Silentium', 29,          'SilentiumIO',
  31,          'Silentium', 33,          34,          'IO',
  'Silentium', 37,          38,          39,          'Silentium',
  41,          'IO',        43,          'Silentium', 'SilentiumIO',
  46,          47,          'Silentium', 'IO',        50,
  51,          'Silentium', 53,          54,          55,
  'Silentium', 57,          58,          59,          'Silentium',
  61,          62,          'IO',        'Silentium', 65,
  66,          67,          'Silentium', 69,          'IO',
  71,          'Silentium', 73,          74,          'SilentiumIO',
  'Silentium', 'IO',        78,          79,          'Silentium',
  81,          82,          83,          'Silentium', 85,
  86,          87,          'Silentium', 89,          'SilentiumIO',
  'IO',        'Silentium', 93,          94,          95,
  'Silentium', 97,          'IO',        99,          'Silentium'
]

const customOutputData = [
  'Silentium',   'SilentiumIO', 18,
  'IO',          'Silentium',   27,
  'SilentiumIO', 33,            'Silentium',
  39,            'IO',          'SilentiumIO',
  'Silentium',   51,            54,
  57,            'Silentium',   'IO',
  66,            69,            'Silentium',
  'SilentiumIO', 78,            81,
  'Silentium',   87,            'SilentiumIO',
  93,            'Silentium',   99,
  102,           'IO',          'Silentium',
  111,           114,           117,
  'Silentium',   123
]

describe("Test generateList function", () => {
  test("it should work with no params", () => {
    const output = generateList();
    expect(JSON.stringify(output)).toEqual(JSON.stringify(defaultOutputData));
  });
  test("it should work with params {from: 12, to: 123, step: 3}", () => {
    const output = generateList({from: 12, to: 123, step: 3});
    expect(JSON.stringify(output)).toEqual(JSON.stringify(customOutputData));
  });
  test("it should work with wrong params {from: 1, to: 10, step: 0}", () => {
    const output = generateList({from: 1, to: 10, step: 0});
    expect(JSON.stringify(output)).toBe('[]');
  });
  test("it should work with wrong params {from: 'abc', to: 10, step: 1}", () => {
    const output = generateList({from: 'abc', to: 10, step: 0});
    expect(JSON.stringify(output)).toBe('[]');
  });
});