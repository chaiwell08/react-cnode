import React, { Component } from "react";

class PageButton extends Component {
  render() {
    return <button onClick={this.props.handleClick}>{this.props.page}</button>;
  }
}

export default PageButton;
