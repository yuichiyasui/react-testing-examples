export const calcTotalPrice = ({
  items,
}: {
  items: { price: number }[];
}): number => {
  return items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};
