import React, { Component } from "react";
import { connect } from "react-redux";
import { changeQuantity, deleteItem } from "./actions/shoe.action";
import { ADD, SUBTRACT } from "./constants/shoe.constants";
export class ShoeCart extends Component {
  renderCartContent = () => {
    return this.props.data.map(
      ({ id, name, price, image, quantity, alias }, index) => {
        return (
          <tr>
            <th scope="row">
              <img
                src={image}
                alt={alias}
                className="img-fluid"
                style={{ width: "6rem" }}
              />
            </th>
            <td>{name}</td>
            <td>
              <div className="d-flex justify-content-center">
                <i
                  className="fa fa-minus mt-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.handleSubtractQuantity(this.props.data[index]);
                  }}
                ></i>
                <input
                  type="text"
                  className="text-center mx-3"
                  value={quantity}
                  style={{ width: "10%" }}
                  readOnly
                ></input>
                <i
                  className="fa fa-plus mt-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.handleAddQuantity(this.props.data[index]);
                  }}
                ></i>
              </div>
            </td>
            <td>{price}</td>
            <td>{price * quantity}</td>
            <td>
              <button
                onClick={() => {
                  this.props.handleDeleteItem(this.props.data[index]);
                }}
                className="btn btn-danger"
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        );
      }
    );
  };
  getTotalMoney = () => {
    let totalMoney = null;
    this.props.data.forEach(({ quantity, price }) => {
      let finalAmount = quantity * price;
      totalMoney += finalAmount;
    });
    return totalMoney;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.renderCartContent()}
            {this.props.data.length > 0 && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Tổng Tiền: </td>
                <td>{this.getTotalMoney()}</td>
                <td>
                  <button className="btn btn-success">Thanh Toán</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {this.props.data.length === 0 && <p>Empty Cart</p>}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.shoeReducer.cartArray,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteItem: (value) => {
    dispatch(deleteItem(value));
  },
  handleSubtractQuantity: (value) => {
    dispatch(changeQuantity(SUBTRACT, value));
  },
  handleAddQuantity: (value) => {
    dispatch(changeQuantity(ADD, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeCart);
