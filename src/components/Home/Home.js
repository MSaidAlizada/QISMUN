import React from "react";
import bg from "../../images/background.png";
import logo from "../../images/QISMUN LOGO.png"
import { isMobile } from "react-device-detect";
import { Typography, Grid } from "@mui/material";

const Home = () => {
    return ( 
        <div style={{ margin: 0, backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
            <Grid container spacing={4}>
                <Grid item>
                    <img src={logo} alt="logo" style={{height: "150px"}} />
                </Grid>
                <Grid item>
                    <Typography variant={isMobile ? ("h3") : ("h2")} sx={{paddingTop: 2 ,color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>Qatar International School</Typography>
                    <Typography variant={isMobile ? ("h4") : ("h3")} sx={{color: "#8ad6f7", fontFamily: "STIX Two Text", fontWeight: 600, flex: 1}}>Model United Nations</Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Home;