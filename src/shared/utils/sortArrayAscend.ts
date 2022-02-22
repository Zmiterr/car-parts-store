type SortedElement = string | number;
export const sortArrayAscend = (a: SortedElement, b: SortedElement): number => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export const sortArrayDescend = (a: SortedElement, b: SortedElement): number => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
};
