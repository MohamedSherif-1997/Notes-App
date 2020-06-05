import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Signup from "../../components/Signup";
const styles = {
  signup: {
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
  },
};
class SignupContainer extends Component {
  render() {
    return (
      <Grid container className={this.props.classes.signup}>
        <Header />
        <Signup history={this.props.history} />
        <Footer />
      </Grid>
    );
  }
}
export default withStyles(styles)(SignupContainer);
