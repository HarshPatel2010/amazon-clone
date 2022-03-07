export const initialState = {
  basket: [],
  user:null
};

//{selector}reduce function to perform various operations in basket like itemcounts,total amount
export const getBasketTotal = (basket) => {
  //we are using ES6 format here
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer =  (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return  {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return{
        ...state,
        basket:[]
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can not remove  this ${action.id} product as it is not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      const cUser = action.user;
      return  {
        ...state,
        user: cUser,
      };
    default:
      return state;
  }
};
export default reducer;
