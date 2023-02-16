import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import bayyopane from "../../images/bayyopane.png";
import dinugadesilva from "../../images/dinugadesilva.png";
import hajira from "../../images/hajira.png";
import khansa from "../../images/khansa.png";
import aaraon from "../../images/aaraon.png";
import sarah from "../../images/sarah.png";
import mikayla from "../../images/mikayla.png";
import gamble from "../../images/gamble.png";
import { Grid, Typography, Box } from "@mui/material";

const Profiles = () => {
    return ( 
        <div>
            <BrowserView>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                            <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>Secretary Generals</Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{justifyContent: "center"}}>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={bayyopane} alt="bayyopane" style={{ borderRadius: "50%", height: "175px", width: "175px" }}/>
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General - Bayyo pane</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={khansa} alt="khansa" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General - Khansa Herdina</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={dinugadesilva} alt="dinugadesilva" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General - Dinuga De Silva</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={aaraon} alt="aaraon" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy Secretary General - Aaron Sanjay Ananthan</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                            <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>General assembly</Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{justifyContent: "center"}}>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={hajira} alt="hajira" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>President - Hajirah Zubair</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={mikayla} alt="mikayla" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President - Mikayla Said</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={sarah} alt="sarah" style={{ borderRadius: "50%", height: "175px", width: "175px"}} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President - Sarah Said</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                            <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>Director of QISMUN</Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{justifyContent: "center"}}>
                        <Grid item xs={3} sx={{textAlign: "center"}}>
                            <img src={gamble} alt="Misspamelagamble" style={{ borderRadius: "50%", height: "175px", width: "175px" }} />
                            <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Miss Pamela Gamble</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </BrowserView>
            <MobileView>
                <Box sx={{justifyContent: "center", textAlign: "center"}}>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text" }}>Secretary Generals</Typography>
                    <img src={bayyopane} alt="Bayyo Pane" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Bayyo pane</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General</Typography>
                    <img src={khansa} alt="Khansa Herdiana" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Khansa Herdiana</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General</Typography>
                    <img src={dinugadesilva} alt="Dinuga De Silva" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Dinuga De Silva</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Co-Secretary General</Typography>
                    <img src={aaraon} alt="Aaron Sanjay Ananthans" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Aaron Sanjay Ananthans</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy Secretary General</Typography>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text", marginTop: 2 }}>General assembly</Typography>
                    <img src={hajira} alt="Hajirah Zubair" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Hajirah Zubair</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>President of the General Assembly</Typography>
                    <img src={mikayla} alt="Mikayla Said" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Mikayla Said</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President of the General Assembly </Typography>
                    <img src={sarah} alt="Sarah Said" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Sarah Said</Typography>
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Deputy President of the General Assembly </Typography>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "STIX Two Text", marginTop: 2 }}>Director of QISMUN</Typography>
                    <img src={gamble} alt="Miss Pamela Gamble" style={{ borderRadius: "50%", height: "200px" }} />
                    <Typography sx={{ color: "white", fontFamily: "STIX Two Text" }}>Miss Pamela Gamble</Typography>
                </Box>
            </MobileView>
        </div>
        
    );
}
 
export default Profiles;