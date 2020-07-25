import {getText} from './date-range';

describe('feature/Utils/date-range', () => {
  const getDate = (y, m, d) => new Date(y, m, d);

  const cases = [
    ['Same Date', '25-Jul-2020', [getDate(2020, 6, 25), getDate(2020, 6, 25)]],
    ['Same Month', 'Feb-2020', [getDate(2020, 1, 1), getDate(2020, 1, 25)]],
    ['Q1', 'Q1-2019', [getDate(2019, 0, 1), getDate(2019, 2, 31)]],
    ['Q2', 'Q2-2019', [getDate(2019, 3, 1), getDate(2019, 5, 30)]],
    ['Q3', 'Q3-2019', [getDate(2019, 6, 1), getDate(2019, 8, 30)]],
    ['Q4', 'Q4-2019', [getDate(2019, 9, 1), getDate(2019, 11, 31)]],
    ['Default', '10-Mar-2019 - 9-Apr-2019', [getDate(2019, 2, 10), getDate(2019, 3, 9)]],
  ];

  it.each(cases)('%s: %p', (name, expected, [fromDate, toDate]) => {
    const actual = getText(fromDate, toDate);
    expect(actual).toBe(expected);
  });

});