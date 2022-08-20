import {
  ADD,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_ITEM,
  LOCAL_STORAGE,
  SHOW_DETAIL,
  SUBTRACT,
} from "../constants/shoe.constants";
import { shoeData } from "../data/shoedata";
const initialState = {
  dataShoe: shoeData,
  detailShoe: shoeData[0],
  cartArray: [],
};

export const persistedState = localStorage.getItem(LOCAL_STORAGE)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE))
  : {};

export const shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_DETAIL: {
      return {
        ...state,
        detailShoe: state.dataShoe.find((item) => {
          return item.id === payload.id;
        }),
      };
    }
    case ADD_TO_CART: {
      let cartItem = { ...payload, quantity: 1 };
      let cloneCart = [...state.cartArray];
      let itemIndex = cloneCart.findIndex(({ id }) => {
        return id === cartItem.id;
      });
      if (itemIndex === -1) {
        return { ...state, cartArray: [...state.cartArray, cartItem] };
      } else {
        cloneCart[itemIndex].quantity++;
        return {
          ...state,
          cartArray: cloneCart,
        };
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        cartArray: state.cartArray.filter(({ id }) => {
          return id !== payload.id;
        }),
      };
    }
    case CHANGE_QUANTITY: {
      let cartArray = [...state.cartArray];
      let cartIndex = cartArray.findIndex(({ id }) => id === payload.value.id);
      let _quantity = cartArray[cartIndex].quantity;
      switch (payload.action) {
        case ADD: {
          _quantity++;
          break;
        }
        case SUBTRACT: {
          _quantity--;
          break;
        }
        default:
          break;
      }
      if (_quantity === 0) {
        cartArray.splice(cartIndex, 1);
      } else {
        cartArray[cartIndex].quantity = _quantity;
      }
      return { ...state, cartArray: cartArray };
    }
    default:
      return state;
  }
};
