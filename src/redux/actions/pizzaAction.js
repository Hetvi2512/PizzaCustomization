import { ADD_INGREDIENTS } from "../pizzaTypes";
export const addIngredient = (event, ingredients) => {
  return {
    type: ADD_INGREDIENTS,
    payload: { event, ingredients },
  };
};
