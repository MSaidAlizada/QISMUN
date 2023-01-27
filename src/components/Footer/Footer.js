import React from "react";
import { Paper, Typography, Stack, Link } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return ( 
        <Paper sx={{marginTop: "auto"}}>
            <Typography variant="h6" sx={{ color: "#165a72", fontFamily: "STIX Two Text", paddingTop: 1, paddingLeft: 2 }}>Contacts</Typography>
            <Stack direction="row" alignItems="center" gap={1} paddingLeft={4}>
                <EmailIcon sx={{ color: "#165a72" }} />
                <Typography variant="p" sx={{ color: "#165a72", fontFamily: "STIX Two Text", paddingLeft: 0, display: "block" }}>info@qis.org</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} paddingLeft={4}>
                <CallIcon sx={{ color: "#165a72" }} />
                <Typography variant="p" sx={{ color: "#165a72", fontFamily: "STIX Two Text", paddingLeft: 0, display: "block" }}>+974 4483 3456</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} paddingLeft={4}>
                <LocationOnIcon sx={{ color: "#165a72" }} />
                <Link variant="p" underline="none" href={"https://www.google.com/maps/place/Qatar+International+School/@25.3289842,51.5192342,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45c4b1967d62a9:0xe53aab5471d019fc!8m2!3d25.3289842!4d51.5214229!16s%2Fm%2F03cc0hg"} sx={{ color: "#165a72", fontFamily: "STIX Two Text", paddingLeft: 0, display: "block" }}>United Nations Street, Doha Qatar</Link>
            </Stack>
        </Paper>
     );
}
 
export default Footer;