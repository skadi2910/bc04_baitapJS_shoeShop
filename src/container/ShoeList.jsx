import React, { Component } from "react";
import ShoeItem from "./ShoeItem";
import { connect } from "react-redux";
export class ShoeList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-4">
          {this.props.dataShoe.map((item, index) => {
            return (
              <div className="col h-100 my-1">
                <ShoeItem data={item} key={item.id + index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dataShoe: state.shoeReducer.dataShoe,
});

export default connect(mapStateToProps)(ShoeList);
