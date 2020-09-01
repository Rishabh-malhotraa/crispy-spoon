import React from "react";
import Grid from "@material-ui/core/Grid";

import ListChip from "./ListChip";
import KPIDropDown from "./KPIDropdown";

const KeyPerformanceIndexComponent = (): JSX.Element => {
  return (
    <Grid container direction="row">
      <KPIDropDown />
      <ListChip />
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
