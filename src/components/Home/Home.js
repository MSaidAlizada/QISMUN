import React, {useEffect, useState} from "react";
import bg1 from "../../images/backgrounds/background.png";
import bg2 from "../../images/backgrounds/background2.png";
import bg3 from "../../images/backgrounds/background3.png";
import bg4 from "../../images/backgrounds/background4.png";
import logo from "../../images/QISMUN LOGO.png"
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import { Typography, Grid } from "@mui/material";

const Home = () => {
    var backgroundList = [bg1, bg2, bg3, bg4]
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setIndex((i) => { return index === 3 ? 0 : i+1}), 2000);
        return () => {
            clearInterval(interval);
        };
    }, [index]);
    return ( 
        <div style={{ margin: 0, backgroundImage: isMobile ? ("") : (`url(${backgroundList[index]})`), height: "100vh", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
            <BrowserView>
                <Grid container spacing={4}>
                    <Grid item>
                        <img src={logo} alt="logo" style={{height: "150px"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant={isMobile ? ("h3") : ("h2")} sx={{paddingTop: 2 ,color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>Qatar International School</Typography>
                        <Typography variant={isMobile ? ("h4") : ("h3")} sx={{color: "#8ad6f7", fontFamily: "STIX Two Text", fontWeight: 600, flex: 1}}>Model United Nations</Typography>
                    </Grid>
                </Grid>
            </BrowserView>
            <MobileView>
                <Grid container spacing={4}>
                    <Grid item>
                        <Typography variant={isMobile ? ("h3") : ("h2")} sx={{paddingTop: 2 ,color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>Qatar International School</Typography>
                        <Typography variant={isMobile ? ("h4") : ("h3")} sx={{color: "#8ad6f7", fontFamily: "STIX Two Text", fontWeight: 600, flex: 1}}>Model United Nations</Typography>
                    </Grid>
                    <Grid item justifyContent="center">
                        <img src={logo} alt="logo" style={{height: "200px"}} />
                    </Grid>
                </Grid>
            </MobileView>
        </div>
     );
}
 
export default Home;