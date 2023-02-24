import React from "react";
import { Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import screenshot from "../../images/instascreenshot.png";

const Press = () => {
    return ( 
        <div style={{margin: 16}}>
            <Typography variant="h2" sx={{ color: "white", fontFamily: "STIX TWO TEXT", fontWeight: 600 }}>Press</Typography>
            <Typography variant={isMobile ? ("h4") : ("h3")} align="center" sx={{ color: "#7cc4dc", fontFamily: "nunito" }}>Follow our instagram: @qismunqa</Typography>
            <img src={screenshot} alt="insta" style={{display: "block", marginBottom:"150px" ,marginLeft: "auto", marginRight: "auto", width: isMobile ? ("90%"): ("50%")}} />
        </div>
     );
}
 
export default Press;