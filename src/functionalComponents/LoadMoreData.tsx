import React, {useEffect, useRef} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { autocompleteClasses } from '@mui/material';
import useVisible from '../hooks/useVisible';

export default function LoadMoreData(props : any) {
    const elementRef = useRef(null);
    const isVisible = useVisible(elementRef);

    useEffect(() => {
        if (isVisible) {
            props.onVisible();
        }
    }, [isVisible])

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