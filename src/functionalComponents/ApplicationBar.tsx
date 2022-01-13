import React, {useState, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import DrawerComponent from './DrawerComponent';


/**
 * Top application bar functional component.
 * @param props React props.  Need to be of the type ApplicationBarProps.
 * @returns React functional component.
 */
export default function ApplicationBar(props : ApplicationBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    /**
     * Style props for the rocket icon.
     */
    const rocketStyle = {
        marginX: 1,
    }

    /**
     * React component acting as a spacer between elements on the left and right sides of the application bar.
     * @returns React component.
     */
    const Spacer = () => {
        return (
        <div style={{flexGrow: 1}} />
        )
    }

    /**
     * Opens and closes the menu by setting the "menuOpen" state variable.
     */
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    /**
     * Sends the selected view mode to the parent component.
     * @param e One of the accepted view modes.
     */
    const handleMenuItemClick = (e : ViewMode) => {
        props.onMenuItemClick(e);
    }

    return (
        <AppBar position="sticky" sx={{backgroundColor: "#cfcfcf", color: "black"}}>
            <Toolbar>
                <Typography variant="h6" component="div">Spacestagram</Typography>
                <motion.div initial={{x: -20, y: 20, opacity: 0}} animate={{x: 0, y: 0, opacity: 1}} transition={{delay: 0.5}}>
                    <RocketLaunch sx={rocketStyle} />
                </motion.div>
                <Spacer />
                <IconButton tabIndex={1} onClick={toggleMenu} size="large" edge="end">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <DrawerComponent onMenuItemClick={handleMenuItemClick} onMenuClickAway={toggleMenu} menuOpen={menuOpen} />
        </AppBar>
    )
}