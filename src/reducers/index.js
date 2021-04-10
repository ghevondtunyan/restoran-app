const initialState = {
  menu: [],
  loading: true,
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
        menu: state.menu,
        loading: true,
      };
    default:
      return state;
  }
};
export default reducer;
