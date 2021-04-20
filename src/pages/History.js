import { Grid } from "@material-ui/core";
import React from "react";
import HistoryContent from "../components/HistoryContent";

const History = () => {
  return (
    <>
      
      <Grid style={{marginTop:"20px", backgroundImage: "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",}} container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10}>
              <HistoryContent />
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </>
  );
};

export default History;
