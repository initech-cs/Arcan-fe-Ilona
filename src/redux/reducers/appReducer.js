const init = {
  loaded: false,
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case "APP_LOADED":
      return { ...state, loaded: true };
    case "APP_LOADING":
      return { ...state, loaded: false };
    default:
      return state;
  }
};
