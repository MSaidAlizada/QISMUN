import React from "react";
import bayyopane from "../../images/bayyopane.png";
import dinugadesilva from "../../images/dinugadesilva.png";
import hajira from "../../images/hajira.png";
import khansa from "../../images/khansa.png";
import aaraon from "../../images/aaraon.png";
import sarah from "../../images/sarah.png";
import mikayla from "../../images/mikayla.png";
import { Grid, Typography } from "@mui/material";

const Profiles = () => {
    return ( 
        <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary Generals</Typography>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={bayyopane} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }}/>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Bayyo pane</Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={khansa} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Khansa Herdina</Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={dinugadesilva} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Dinuga De Silva</Typography>
                </Grid>
            </Grid>
            <Grid item>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>General assembly</Typography>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={hajira} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>President - Hajirah Zubair</Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={mikayla} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President - Mikayla Said</Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={sarah} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President - Sarah Said</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Head of Training</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy Secretary General</Typography>
                    <img src={aaraon} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Aaron Sanjay Ananthan</Typography>
                </Grid>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <img src={bayyopane} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Miss Pamela Gamble</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Profiles;