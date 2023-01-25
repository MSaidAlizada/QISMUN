import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
    return ( 
        <div style={{margin: 16}}>
            <Typography variant="h2" sx={{ color: "white", fontFamily: "STIX Two Text", fontWeight: 600 }}>Qatar International School</Typography>
            <Typography variant="h3" sx={{color: "#8ad6f7", fontFamily: "STIX Two Text", fontWeight: 600}}>Model United Nations</Typography>
        </div>
     );
}
 
export default Home;