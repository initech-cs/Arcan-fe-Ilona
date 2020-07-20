const initialState = {
  isAuthenticated: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, ...payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};
