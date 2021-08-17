const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      throw new Error("There is an Error!");
  }
};

export default reducer;
