import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/Login";
const styles = {
  login: {
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
  },
};
class LoginContainer extends Component {
  render() {
    return (
      <Grid container className={this.props.classes.login}>
        <Header />
        <Login history={this.props.history} />
        <Footer />
      </Grid>
    );
  }
}
export default withStyles(styles)(LoginContainer);
