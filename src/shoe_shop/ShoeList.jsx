//
import React, { Component } from "react";
import ShoeItem from "./ShoeItem";
export default class ShoeList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-4">
          {this.props.data.map((item, index) => {
            return (
              <div className="col h-100 my-1">
                <ShoeItem
                  data={item}
                  key={item.id + index}
                  handleAddToCart={this.props.handleAddToCart}
                  handleViewDetail={this.props.handleViewDetail}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
