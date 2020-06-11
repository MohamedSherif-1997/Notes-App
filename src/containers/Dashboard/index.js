import React from "react";
import { Grid } from "@material-ui/core";
import DashboardDrawer from "../../components/Drawer";

function Dashboard(props) {
  return (
    <Grid container>
      <DashboardDrawer history={props.history} />
    </Grid>
  );
}

export default Dashboard;
