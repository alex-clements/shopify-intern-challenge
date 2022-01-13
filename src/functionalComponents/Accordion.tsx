import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import Typography from '@mui/material/Typography';

export default function Accordion(props : any) {
    const [imageTitle, setImageTitle] = useState(props.imageTitle);
    const [imageExplanation, setImageExplanation] = useState(props.imageExplanation);
    const [imageDate, setImageDate] = useState(props.imageDate);
    const [expanded, setExpanded] = useState(props.expanded);
    const [bodyHeight, setBodyHeight] = useState<number>(100);

    const bodyRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        calculateBodyHeight();
        setExpanded(props.expanded);
    }, [props.expanded])

    const initialBodyProps = {
        "height" : 0,
    }

    const calculateBodyHeight = () => {
        if (bodyRef.current != null) {
            let tempRef : number = bodyRef.current.getBoundingClientRect().height;
            setBodyHeight(tempRef);
        }
    }

    const styleProps = {
        overflow: "hidden"
    }

    const bodyContainerProps = {
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "text-align": "left"
    }

    const titleContainerProps = {
        "paddingLeft": "10px",
        "paddingRight": "10px",
    }

    return (
        <div>
            <div style={titleContainerProps}>
                <Typography gutterBottom variant="h5" component="div">{imageTitle}</Typography>
                <Typography variant="body1" color="text.secondary">{imageDate}</Typography>
            </div>
            <motion.div style={styleProps} initial={initialBodyProps} animate={{height: expanded ? bodyHeight : 0}} transition={{type: "easeInOut"}} >
                <div style={bodyContainerProps}>
                    <Typography ref={bodyRef} variant="body2" color="text.secondary">{imageExplanation}</Typography>
                </div>
            </motion.div>
        </div>
    )
}