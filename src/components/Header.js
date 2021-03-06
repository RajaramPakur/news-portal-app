import React, { Component } from "react";
import CustomButton from "./common/CustomButton";

export class Header extends Component {
  handleOnClick = () => {
    console.log("I'm in header");
  };

  render() {
    return (
      <div>
        Header
        <CustomButton
          btnText="Header Button"
          handleClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default Header;
