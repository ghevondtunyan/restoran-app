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

export { menuLoaded, menuRequested };
