export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const resetItem = () => ({
  type: "RESET",
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  payload: id,
});
