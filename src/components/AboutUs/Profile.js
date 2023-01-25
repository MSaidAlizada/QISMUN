import React from "react";
import boss from "../../images/bossman.png";
import { Grid, Typography } from "@mui/material";

const Profiles = () => {
    return ( 
        <Grid container sx={{justifyContent: "center"}}>
            <Grid item>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary Generals</Typography>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
            </Grid>
            <Grid item>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>General assembly</Typography>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
                <Grid item xs={3}><img src={boss} alt="boss" style={{borderRadius: "50%", height: "175px", width: "175px", display: "block" }} /></Grid>
            </Grid>
        </Grid>
    );
}
 
export default Profiles;