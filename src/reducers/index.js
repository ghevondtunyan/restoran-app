const initialState = {
  menu: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENUE_LOADED":
      return {
        menu: action.payload,
        loading: false,
      };
    case "MENUE_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find((item) => item.id === id);

      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "ITEM_DELETE_TO_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
