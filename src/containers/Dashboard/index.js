import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "../../components/header";
import DashboardDrawer from "../../components/drawer";
class Dashboard extends Component {
  render() {
    return (
      <Grid container>
        <Header />
        <DashboardDrawer />
      </Grid>
    );
  }
}
export default Dashboard;
