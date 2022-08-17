import React, { Component } from "react";

export default class ShoeDetail extends Component {
  render() {
    let { id, image, name, price, description, alias } = this.props.data;
    return (
      <div
        className="modal fade"
        id="shoeDetailModal"
        tabIndex={-1}
        aria-labelledby="shoeDetailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="shoeDetailModalLabel">
                Shoe Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="card" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={image}
                      className="img-fluid rounded-start"
                      alt={alias}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title">{name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        ${price}
                      </h6>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.props.handleAddToCart(this.props.data);
                }}
                type="button"
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
