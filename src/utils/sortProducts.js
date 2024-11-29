const sortProducts = (products, field) => {
  if (!field) return products;
  return [...products].sort((a, b) => (a[field] > b[field] ? -1 : 1));
};

// Sort the Book List Dynamically
// Use the selected sortField to sort your list. Sorting should happen before rendering the list.
export const sortAnyArrayOfObject = (books, field) => {
  if (!field) return books; // Return unsorted list if no field is selected
  return [...books].sort((a, b) => {
    if (a[field] > b[field]) return -1; // Descending order
    if (a[field] < b[field]) return 1;
    return 0;
  });
};

export default sortProducts;
