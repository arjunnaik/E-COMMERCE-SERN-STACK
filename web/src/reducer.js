export const initialState = {
  basket: [],
  user: null,
  apiKey: "http://localhost:4000",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INSERT_SEARCH":
      return {
        ...state,
        searchValue: action.searchValue,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (BasketItem) => BasketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
