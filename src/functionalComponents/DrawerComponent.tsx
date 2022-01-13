import React, {useEffect, useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {motion} from 'framer-motion';
import { MotionPhotosOffSharp } from '@mui/icons-material';
import { isAbsolute } from 'path/posix';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { ClassNames } from '@emotion/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessTime from '@mui/icons-material/AccessTime';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Shuffle from '@mui/icons-material/Shuffle';

export default function DrawerComponent(props : any) {
    const [menuOpen, setMenuOpen] = useState(props.menuOpen);

    useEffect(() => {
        setMenuOpen(!menuOpen);
    }, [props.menuOpen]);

    const initialProps = {
        width: "0px"
    }

    const animateProps = {
        width: menuOpen ? "300px" : "0px"
    }

    const handleSwipe = (event : React.MouseEvent) => {
        props.onMenuClickAway();
    }

    const styles = {
        paper: "backgroundColor : blue"
    }

    const chronologicalMenuItemClick = () => {
        props.onMenuItemClick("chronological");
        props.onMenuClickAway()
    }

    const savedMenuItemClick = () => {
        props.onMenuItemClick("saved");
        props.onMenuClickAway()
    }

    const randomMenuItemClick = () => {
        props.onMenuItemClick("random");
        props.onMenuClickAway()
    }

    return (
    <SwipeableDrawer
      anchor={"right"}
      open={!menuOpen}
      onClose={handleSwipe}
      onOpen={handleSwipe}
      PaperProps={{sx:{"backgroundColor": "#e1e1e1", "width": "240px"}}}
    >
        <Toolbar>
            <Typography variant="h6" component="div">View Options</Typography>
        </Toolbar>
        <Divider />
        <List>
            <ListItem button onClick={savedMenuItemClick}>
                <ListItemIcon>
                    <FavoriteBorder />
                </ListItemIcon>
                <ListItemText primary={"Liked"} />
            </ListItem>
            <ListItem button onClick={chronologicalMenuItemClick}>
                <ListItemIcon>
                    <AccessTime />
                </ListItemIcon>
                <ListItemText primary={"Chronological"} />
            </ListItem>
            <ListItem button onClick={randomMenuItemClick}>
                <ListItemIcon>
                    <Shuffle />
                </ListItemIcon>
                <ListItemText primary={"Random"} />
            </ListItem>
        </List>
    </SwipeableDrawer>
    )
}