import React, { Component } from "react";
import ShoeCart from "./ShoeCart";
import ShoeDetail from "./ShoeDetail";
import ShoeList from "./ShoeList";

export default class ShoeShop extends Component {
  render() {
    return (
      <div>
        <h1>Shoe Shop</h1>
        <ShoeCart />
        <ShoeList />
        <ShoeDetail />
      </div>
    );
  }
}
