import { ADD_INGREDIENTS } from "../pizzaTypes";
const initialState = {
  basil: false,
  cheese: false,
  mushroom: false,
  olive: false,
  pineapple: false,
  tomato: false,
};
const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return { ...state, [action.payload.ingredients]: action.payload.event };

    default:
      return state;
  }
};
export default pizzaReducer;
