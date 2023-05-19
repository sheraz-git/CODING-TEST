import React from "react";
import { Box, Grid} from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Box className="container">
      <Grid container spacing={2} className="grid">
        <Grid item xs={12} className="item">
          <div className="paper"><h1>MMM-SOLUTIONS</h1> </div>
        </Grid>
        <Grid item xs={3}>
          <div className="paper"> <h4>CODING TEST</h4></div>
        </Grid>
        <Grid item xs={9}>
          <div className="paper1">
            <button className="button"><Link to="/Signup">SIGNUP</Link></button> 
            <button className="button"><Link to="/Login">LOGIN  </Link></button></div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;