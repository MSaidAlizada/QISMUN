import React, {useEffect, useState} from "react";
import bg1 from "../../images/backgrounds/background.png";
import bg2 from "../../images/backgrounds/background2.png";
import bg3 from "../../images/backgrounds/background3.png";
import bg4 from "../../images/backgrounds/background4.png";
import logo from "../../images/QISMUN LOGO.png"
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import { Typography, Grid, Paper } from "@mui/material";
import Footer from "../Footer/Footer";

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
                <Paper sx={{marginLeft: 6, marginRight: 6, padding: 2, backgroundColor: "#7084b4"}}>
                    <Typography sx={{color: "white", fontFamily: "Roboto"}}>
                        Dear delegates, <br />
                        <br/>

It is with honour and pleasure to invite you to Qatar International School Model United Nations 2023. This is our second conference as a school and our first-ever external conference! The first conference was in 2019. The failures of our conferences between then and now are a reflection of the state of our world for the past few years. <br/><br/>

War. Pandemic. These phenomena have shaken the world and ourselves to the core. Yet, our resolution for a better world has not been shy either. Through and through, the youth have displayed the power of our voice and actions as an instrument of reformation. Our hope is not worthless. As young people, we have proven our capabilities to be the ultimate contenders for the ideals of peace, which is why the theme of our conference this year is ‘The Struggle for Utopia’. <br/><br/>

The theme serves as a reminder of why we do MUN in the first place. To face our problems as a society and individuals, with thought and understanding. ‘The death of one man is a tragedy, the death of millions is a statistic’ - Joseph Stalin. The media desensitises us to the substance in numbers, turning even deaths into merely calculated values. By attending this event, you are already taking matters into your own hands as the MUN platform sparks a better understanding of the world around us.<br/><br/>

 For many of you, this conference will be your first glimpse of the MUN world. You're nervous, anxious and confused; I understand. All of us have been in your position at the start. To all beginner delegates, the QISMUN team welcomes you aboard this new journey.<br/><br/>

                        I address you as ‘delegates’, but what is a delegate? All of you have been tasked with the responsibility of representing a country. This responsibility is not to be taken lightly. An entire nation’s fate and reputation fall in your hands for one day! You and your schoolmates will be split into five different rooms we call committees: Security Council, General Assembly 4, Economic and Social Council, Human Rights Council and World Health Assembly. Each committee will have varying topics which we have already sent out.  <br /><br />
                        

So, delegates, on behalf of the leadership team, I thank you for joining us on this journey and wish you the best of luck to pave your way through it! <br/><br/>

Sincerely, <br/><br/>
Bayyo Pane <br/><br/>
QISMUN Co-Secretary General <br/><br/>




                    </Typography>
                </Paper>
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
                    <Grid item>
                        <Paper sx={{marginLeft: 6, marginRight: 6, padding: 2, backgroundColor: "#7084b4"}}>
                    <Typography sx={{color: "white", fontFamily: "Roboto"}}>
                        Dear delegates, <br />
                        <br/>

It is with honour and pleasure to invite you to Qatar International School Model United Nations 2023. This is our second conference as a school and our first-ever external conference! The first conference was in 2019. The failures of our conferences between then and now are a reflection of the state of our world for the past few years. <br/><br/>

War. Pandemic. These phenomena have shaken the world and ourselves to the core. Yet, our resolution for a better world has not been shy either. Through and through, the youth have displayed the power of our voice and actions as an instrument of reformation. Our hope is not worthless. As young people, we have proven our capabilities to be the ultimate contenders for the ideals of peace, which is why the theme of our conference this year is ‘The Struggle for Utopia’. <br/><br/>

The theme serves as a reminder of why we do MUN in the first place. To face our problems as a society and individuals, with thought and understanding. ‘The death of one man is a tragedy, the death of millions is a statistic’ - Joseph Stalin. The media desensitises us to the substance in numbers, turning even deaths into merely calculated values. By attending this event, you are already taking matters into your own hands as the MUN platform sparks a better understanding of the world around us.<br/><br/>

 For many of you, this conference will be your first glimpse of the MUN world. You're nervous, anxious and confused; I understand. All of us have been in your position at the start. To all beginner delegates, the QISMUN team welcomes you aboard this new journey.<br/><br/>

                        I address you as ‘delegates’, but what is a delegate? All of you have been tasked with the responsibility of representing a country. This responsibility is not to be taken lightly. An entire nation’s fate and reputation fall in your hands for one day! You and your schoolmates will be split into five different rooms we call committees: Security Council, General Assembly 4, Economic and Social Council, Human Rights Council and World Health Assembly. Each committee will have varying topics which we have already sent out.  <br /><br />
                        

So, delegates, on behalf of the leadership team, I thank you for joining us on this journey and wish you the best of luck to pave your way through it! <br/><br/>

Sincerely, <br/><br/>
Bayyo Pane <br/><br/>
QISMUN Co-Secretary General <br/><br/>




                    </Typography>
                </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </MobileView>
        </div>
     );
}
 
export default Home;