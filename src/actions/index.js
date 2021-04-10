const menuLoaded = (newMenu) => {
  return {
    type: "MENUE_LOADED",
    payload: newMenu,
  };
};

export { menuLoaded };
