import React from "react";
import { Link } from 'react-router-dom';
import {Box, Drawer, CssBaseline, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const drawerWidth = 270;

const Navigator = () => {
    return ( 
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Drawer variant="permanent" anchor="left" sx={{width: drawerWidth,flexShrink: 0,[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },}}>
                <Box sx={{paddingTop: 3}}>
                    <Divider sx={{ backgroundColor: "#6b87b1 "}} style={{height: 15, borderRadius: 10, width: 250, margin: "auto"}}/>
                    <List>
                        <ListItem>
                            <ListItemButton component={Link} to="/" sx={{justifyContent: "center"}}>
                                <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Home</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component={Link} to="/about" sx={{justifyContent: "center"}}>
                                <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>About Us</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{justifyContent: "center"}}>
                                <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Conference</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{justifyContent: "center"}}>
                                <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Press</Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider sx={{ backgroundColor: "#6b87b1" }} style={{ height: 15, borderRadius: 10, width: 250, margin: "auto" }} />
                    <List>
                        <ListItem>
                            <Typography variant="h5" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>Contacts</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><EmailIcon color="primary"/></ListItemIcon>
                            <Typography variant="p" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>info@qis.org</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CallIcon color="primary"/></ListItemIcon>
                            <Typography variant="p" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>+974 4483 3456</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><LocationOnIcon color="primary"/></ListItemIcon>
                            <Typography variant="p" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>United Nations Street, Doha Qatar</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
     );
}
 
export default Navigator;