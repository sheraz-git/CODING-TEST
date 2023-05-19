import React from "react";
import { Box, Grid } from "@mui/material";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

function UserDashboard() {
  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    window.location.href = "/";
  };
  const navigate = useNavigate();
  if (!Cookies.get("token")) {
    navigate("/");
    return null;
  }
  return (
    <Box className="container">
      <Grid item xs={12}>
        <div className="paper1">
          <button className="button" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="paper1">
          <div className="services">
            <div className="service1">
              <h3>
                <Link to="/SeeUsers">
                  <h3>GET--DELETE--UPDATE</h3>
                  
                </Link>
              </h3>
            </div>

          </div>
        </div>
      </Grid>
    </Box>
  );
}

export default UserDashboard;