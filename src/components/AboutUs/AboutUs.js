import React from "react";
import Profiles from "./Profile";
import { Typography } from "@mui/material";

const AboutUs = () => {
    return ( 
        <div style={{margin: 16}}>
            <Typography variant="h2" sx={{ color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>About Us</Typography>
            <Typography sx={{color: "white", fontFamily: "STIX Two Text", marginBottom: 4}}>QIS Model United Nations is a youth-based organisation run by the student leadership team that focuses on the development of young people and impact on the community. QIS MUN aims to simulate what being a delegate in the real United Nations would be like. QIS MUN is the prime time to make connections with similar students who aim to achieve the same goal of self-development. It provides the golden opportunity for delegates to bond and make networks among each other. </Typography>
            <Typography variant="h3" sx={{ color: "#899fc1", fontFamily: "STIX Two Text" }}>Meet the Execs</Typography>
            <Profiles/>
        </div>
     );
}
 
export default AboutUs;