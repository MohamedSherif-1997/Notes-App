import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  footer: {
    width: "100%",
    height: "35px",
    textAlign: "center",
    color: "black",
    fontFamily: '"Soleil",Helvetica,Arial,sans-serif',
    fontSize: "15px",
  },
};
class Footer extends Component {
  render() {
    return (
      <div className={this.props.classes.footer}>copyrights by sherif 2020</div>
    );
  }
}
export default withStyles(styles)(Footer);
