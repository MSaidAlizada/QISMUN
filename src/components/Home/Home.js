import React from "react";
import { isMobile } from "react-device-detect";
import { Typography } from "@mui/material";

const Home = () => {
    return ( 
        <div style={{margin: 16}}>
            <Typography variant={isMobile ? ("h3") : ("h2")} sx={{ color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>Qatar International School</Typography>
            <Typography variant={isMobile ? ("h4") : ("h3")} sx={{color: "#8ad6f7", fontFamily: "STIX Two Text", fontWeight: 600}}>Model United Nations</Typography>
        </div>
     );
}
 
export default Home;