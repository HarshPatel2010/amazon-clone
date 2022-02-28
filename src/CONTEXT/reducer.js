
export const initialState = {
  basket: [],
};

//{selector}reduce function to perform various operations in basket like itemcounts,total amount 
export const getBasketTotal = (basket) => {
  //we are using ES6 format here
  return basket?.reduce((amount,item)=> item.price + amount,0)}

 const reducer = (state, action) => {
    console.log(action);
    
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
      
    default:
      return state;
    }
};
export default reducer

