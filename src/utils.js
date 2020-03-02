export const WithouIndex = (array, index) =>
  array.slice(0, index).concat(array.slice(index + 1));