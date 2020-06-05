import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "60px",
    color: "black",
    fontFamily: '"Soleil",Helvetica,Arial,sans-serif',
    padding: "0 40px",
    fontSize: "20px",
  },
};
class Header extends Component {
  render() {
    return <div className={this.props.classes.header}>Header</div>;
  }
}
export default withStyles(styles)(Header);
