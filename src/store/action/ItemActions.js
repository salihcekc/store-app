export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const resetItem = () => ({
  type: "RESET",
});

export const deleteItem = (index) => ({
  type: "DELETE_ITEM",
  payload: index,
});
