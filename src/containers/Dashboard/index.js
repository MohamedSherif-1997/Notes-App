import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "../../components/header";
import DashboardDrawer from "../../components/Drawer";

class Dashboard extends Component {
  render() {
    return (
      <Grid container>
        <Header />
        <DashboardDrawer history={this.props.history} />
      </Grid>
    );
  }
}

export default Dashboard;
