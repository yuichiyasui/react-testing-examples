import { calcTotalPrice } from './calc';

describe('calcTotalPrice', () => {
  test('合計金額を返す', () => {
    const items = [{ price: 500 }, { price: 850 }, { price: 1490 }];
    expect(calcTotalPrice({ items })).toBe(2840);
  });
});
