import {
  ADD,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_ITEM,
  SHOW_DETAIL,
  SUBTRACT,
} from "../constants/shoe.constants";
import { shoeData } from "../data/shoedata";
const initialState = {
  dataShoe: shoeData,
  detailShoe: shoeData[0],
  cartArray: [],
};

export const shoeReducer = (
  state = initialState,
  { type, payload, action }
) => {
  switch (type) {
    case SHOW_DETAIL: {
      let dataShoeDetail = state.dataShoe.filter((item) => {
        return item.id === payload.id;
      });
      console.log("dataShoeDetail: ", dataShoeDetail);
      state.detailShoe = dataShoeDetail[0];
      return { ...state };
    }
    case ADD_TO_CART: {
      let cartItem = { ...payload, quantity: 1 };
      let cloneCart = [...state.cartArray];
      let cartIndex = cloneCart.findIndex((item) => {
        return item.id === cartItem.id;
      });
      if (cartIndex === -1) {
        cloneCart.push(cartItem);
      } else {
        cloneCart[cartIndex].quantity++;
      }
      state.cartArray = cloneCart;
      return { ...state };
    }
    case DELETE_ITEM: {
      let deletedArray = state.cartArray.filter((item) => {
        return item.id !== payload.id;
      });
      state.cartArray = deletedArray;
      console.log("deletedArray: ", deletedArray);
      return { ...state };
    }
    case CHANGE_QUANTITY: {
      let cartArray = [...state.cartArray];
      let cartIndex = cartArray.findIndex((item) => {
        return item.id === payload.id;
      });
      let _quantity = cartArray[cartIndex].quantity;
      switch (action) {
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
      state.cartArray = cartArray;
      return { ...state };
    }
    default:
      return state;
  }
};
