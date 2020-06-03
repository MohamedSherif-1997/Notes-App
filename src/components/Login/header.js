import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  header: {
    width: "100%",
    height: "60px",
    textAlign: "center",
    color: "blue",
    backgroundColor: "#ff0055",
  },
};
class Header extends Component {
  render() {
    return <div className={this.props.classes.header}>header</div>;
  }
}
export default withStyles(styles)(Header);
