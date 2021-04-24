const menuLoaded = (newMenu) => {
  return {
    type: "MENUE_LOADED",
    payload: newMenu,
  };
};
const menuRequested = () => {
  return {
    type: "MENUE_REQUESTED",
  };
};
const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  };
};
const deleteFromCart = (id) => {
  return {
    type: "ITEM_DELETE_TO_CART",
    payload: id,
  };
};

export { menuLoaded, menuRequested, addedToCart, deleteFromCart };
