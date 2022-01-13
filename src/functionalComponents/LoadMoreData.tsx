import React, {useEffect, useRef} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useVisible from '../hooks/useVisible';

/**
 * Circular progress component that triggers additional data fetch when visible
 * on the screen.
 * @param props React props.
 * @returns React functional component.
 */
export default function LoadMoreData(props : LoadMoreDataProps) {
    const elementRef = useRef(null);
    const isVisible = useVisible(elementRef);

    /**
     * Triggered when the isVisible state variable changes.
     * Calls the onVisible function in the parent component.
     */
    useEffect(() => {
        if (isVisible) {
            props.onVisible();
        }
    }, [isVisible])

    /**
     * Style props for the wrapper div
     */
    const styleProps = {
        backgroundColor: "#e1e1e1",
        height: 100,
    }

    return (
    <div ref={elementRef} style={styleProps} hidden={!props.dataLoaded || !props.visible}>
        <CircularProgress sx={{marginTop: "25px"}}/>
    </div>
    )
}