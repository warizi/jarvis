export const getNewOrder = <
  T extends { id: number; order: number }
>(
  active: T,
  items: T[]
): number => {
  const activeIndex = items.findIndex(
    (item) => item.id === active.id
  );
  const prevIndex =
    activeIndex - 1 < 0 ? 0 : activeIndex - 1;
  const nextIndex = activeIndex + 1;

  if (activeIndex === 0) {
    return items[0].order / 2;
  }
  if (activeIndex === items.length - 1) {
    return items[items.length - 2].order + 1000;
  }
  return (
    (items[prevIndex].order + items[nextIndex].order) / 2
  );
};
