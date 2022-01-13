import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Progress wheel component
 * @returns React functional component
 */
export default function CustomProgress() {
    const customProgressStyleProps = {
        "marginTop": "50vh"
    }
    return (
        <div style={customProgressStyleProps}>
            <CircularProgress />
        </div>
    )
}