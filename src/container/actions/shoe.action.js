import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_ITEM,
  SHOW_DETAIL,
} from "../constants/shoe.constants";

export const showDetails = (value) => {
  return {
    type: SHOW_DETAIL,
    payload: value,
  };
};

export const addToCart = (value) => {
  return {
    type: ADD_TO_CART,
    payload: value,
  };
};

export const deleteItem = (value) => {
  return {
    type: DELETE_ITEM,
    payload: value,
  };
};

export const changeQuantity = (action, value) => {
  return {
    type: CHANGE_QUANTITY,
    payload: { action, value },
  };
};
