import React from "react";
import "./Conference.css";
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { isMobile } from "react-device-detect";

const Conference = () => {
    function createData(time, event, location) {
        return {time, event, location};
    }

    const rows = [
        createData("7:30 - 8:00", "Arrival and School Registration", "Front of Admin Office"),
        createData("8:00 - 9:30", "Committee session - Lobbying", "Committee Rooms "),
        createData("9:30 - 10:00", "Opening ceremony", "Sports Hall"),
        createData("10:00 - 11:00", "Approval Panel Opens", "Library"),
        createData("10:00 - 12:00", "Committee Sessions", "Committee Rooms"),
        createData("12:00 - 1:15", "Lunch", "Cafetaria + Secondary Break Areas"),
        createData("1:15 - 4:15", "Committee Sessions", "Committee Rooms"),
        createData("4:15 - 4:45", "Activities/break", "Outdoor Area"),
        createData("4:45 - 5:30", "Committee Sessions", "Committee Rooms"),
        createData("5:30 - 6:00", "Closing Ceremony", "Sports Hall")
    ]

    return ( 
        <div style={{margin: isMobile ? 0 : 6}}>
            <Typography variant="h2" sx={{ color: "white", fontFamily: "STIX TWO TEXT", fontWeight: 600}}>QISMUN 2023</Typography>
            <Typography variant="h3" sx={{ color: "#7cc4dc", fontFamily: "STIX TWO TEXT" }}>The Struggle for Utopia</Typography>
            <Grid container spacing={ isMobile ? 0 : 1}>
                <Grid item>
                    <Typography variant="h4" sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Schedule</Typography>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Event</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr>
                                    <td>{row.time}</td>
                                    <td>{row.event}</td>
                                    <td>{row.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Grid>
                <Grid item>
                    <Typography variant="h4" sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>ISSUES</Typography>
                    <Accordion sx={{ backgroundColor: "#28344c"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Security Council</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Head Chair: Mark Wijayaratne</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Deputy Chair: Karen D’Souza</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>The Question of the Leadership in the Ukrainian Government</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: "#28344c"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Human Rights Council</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Head Chair: Mariamawit Tewodros</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Deputy Chair: Sera Jamsheed</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Protecting and promoting press freedom in LEDCs and MEDCs</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: "#28344c"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>General Assembly 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Head Chair: Waleed Gulzar</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Deputy Chair: Omar Musthakeem</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Combating trafficking and poaching of protected species by organized criminal groups</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: "#28344c"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>ECOSOC</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Head Chair: Ibraheem Qidwai</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Deputy Chair: Sara El Sayed</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>The issue of crime rates and its effect on the economy </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: "#28344c"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>World Health Assembly</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Head Chair: Mariam Idriss</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Deputy Chair: Charles Gestin</Typography>
                            <Typography sx={{ color: "#899fc1", fontFamily: "STIX TWO TEXT" }}>Efforts in increasing sanitations for war-torn areas and refugee camps</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Conference;