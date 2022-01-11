import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ClickAwayListener } from '@mui/material';

export default function MainMenu(props : any) {
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleClickAway = () => {
        props.onMenuClickAway();
    }

    const chronologicalMenuItemClick = () => {
        props.onMenuItemClick("chronological");
        handleClickAway();
    }

    const randomMenuItemClick = () => {
        props.onMenuItemClick("random");
        handleClickAway();
    }

    const savedMenuItemClick = () => {
        props.onMenuItemClick("saved");
        handleClickAway();
    }

    return (
        <Menu anchorEl={props.reference} onClick={handleClickAway} open={open}>
            <MenuItem onClick={chronologicalMenuItemClick}>Chronological</MenuItem>
            <MenuItem onClick={randomMenuItemClick}>Random</MenuItem>
            <MenuItem onClick={savedMenuItemClick}>Saved</MenuItem>
        </Menu>
    )
}