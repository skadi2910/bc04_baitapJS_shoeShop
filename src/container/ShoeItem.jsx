import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, showDetails } from "./actions/shoe.action";
class ShoeItem extends Component {
  render() {
    let { name, image, price, shortDescription, alias } = this.props.data;
    return (
      <div>
        <div className="card h-100" style={{ width: "20rem" }}>
          <img src={image} className="card-img-top" alt={alias} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
            <p className="card-text">{shortDescription}</p>
            <button
              className="btn btn-warning mx-3"
              data-bs-toggle="modal"
              data-bs-target="#shoeDetailModal"
              onClick={() => {
                this.props.handleShowDetail(this.props.data);
              }}
            >
              Details
            </button>
            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.data);
              }}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (disPatch) => ({
  handleShowDetail: (value) => {
    disPatch(showDetails(value));
  },
  handleAddToCart: (value) => {
    disPatch(addToCart(value));
  },
});

export default connect(null, mapDispatchToProps)(ShoeItem);
