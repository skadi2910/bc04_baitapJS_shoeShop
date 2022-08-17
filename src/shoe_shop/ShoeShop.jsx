import React, { Component } from "react";
import { shoeData } from "./data/shoedata";
import ShoeCart from "./ShoeCart";
import ShoeDetail from "./ShoeDetail";
import ShoeList from "./ShoeList";

export default class ShoeShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShoe: shoeData,
      detailShoe: shoeData[0],
      cartArray: [],
    };
  }
  handleViewDetail = (shoeId) => {
    let shoeDetail = this.state.dataShoe.filter((item) => {
      return item.id === shoeId;
    });
    this.setState({
      detailShoe: shoeDetail[0],
    });
  };
  handleAddToCart = (shoe) => {
    let cartItem = { ...shoe, quantity: 1 };
    let cloneCart = [...this.state.cartArray];
    let cartIndex = cloneCart.findIndex((item) => {
      return item.id === cartItem.id;
    });
    if (cartIndex === -1) {
      cloneCart.push(cartItem);
    } else {
      cloneCart[cartIndex].quantity++;
    }
    this.setState({
      cartArray: cloneCart,
    });
  };
  handleDeleteItem = (shoeId) => {
    let deletedArray = this.state.cartArray.filter((item) => {
      return item.id !== shoeId;
    });
    this.setState({
      cartArray: deletedArray,
    });
  };
  handleChangeQuantity = (action, shoeId) => {
    let cartArray = [...this.state.cartArray];
    let cartIndex = cartArray.findIndex((item) => {
      return item.id === shoeId;
    });
    let _quantity = cartArray[cartIndex].quantity;
    switch (action.toLowerCase()) {
      case "add":
        _quantity++;
        break;
      case "subtract":
        _quantity--;
        break;
      default:
        break;
    }
    if (_quantity === 0) {
      cartArray.splice(cartIndex, 1);
    } else {
      cartArray[cartIndex].quantity = _quantity;
    }
    this.setState({
      cartArray: cartArray,
    });
  };
  render() {
    return (
      <div>
        <h1>Shoe Shop</h1>
        <ShoeCart
          data={this.state.cartArray}
          handleDeleteItem={this.handleDeleteItem}
          handleChangeQuantity={this.handleChangeQuantity}
        />
        <ShoeList
          data={this.state.dataShoe}
          key="0123"
          handleViewDetail={this.handleViewDetail}
          handleAddToCart={this.handleAddToCart}
        />
        <ShoeDetail
          data={this.state.detailShoe}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
