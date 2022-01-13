import React, {useEffect, useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessTime from '@mui/icons-material/AccessTime';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Shuffle from '@mui/icons-material/Shuffle';

/**
 * Drawer side menu component.
 * @param props React props.
 * @returns React functional component.
 */
export default function DrawerComponent(props : DrawerProps) {
    const [menuOpen, setMenuOpen] = useState(props.menuOpen);

    /**
     * sets the menuOpen state variable when the menuOpen prop changes.
     */
    useEffect(() => {
        setMenuOpen(!menuOpen);
    }, [props.menuOpen]);

    /**
     * handler for click away / swipe away on drawer menu.
     */
    const handleSwipe = () => {
        props.onMenuClickAway();
    }

    /**
     * handles the click event for the chronological menu item.
     */
    const chronologicalMenuItemClick = () => {
        props.onMenuItemClick("chronological");
        props.onMenuClickAway()
    }

    /**
     * handles the click event for the saved menu item.
     */
    const savedMenuItemClick = () => {
        props.onMenuItemClick("saved");
        props.onMenuClickAway()
    }

    /**
     * handles the click event for the random menu item.
     */
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