import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import Typography from '@mui/material/Typography';

/**
 * Accordion component for the Image Cards.
 * @param props React props.
 * @returns React functional component.
 */
export default function Accordion(props : AccordionProps) {
    const imageTitle = useState(props.imageTitle);
    const [imageExplanation, setImageExplanation] = useState(props.imageExplanation);
    const [imageDate, setImageDate] = useState(props.imageDate);
    const [expanded, setExpanded] = useState(props.expanded);
    const [bodyHeight, setBodyHeight] = useState<number>(100);

    const bodyRef = useRef<HTMLHeadingElement>(null);

    /**
     * Triggers if the "expanded" prop changes.  Calculates the text body height, and then sets the "expanded" state.
     */
    useEffect(() => {
        calculateBodyHeight();
        setExpanded(props.expanded);
    }, [props.expanded])

    const initialBodyProps = {
        "height" : 0,
    }

    /**
     * Calculates the height of the accordion body text.  Sets the "bodyHeight" state with the value.
     */
    const calculateBodyHeight = () => {
        if (bodyRef.current != null) {
            let tempRef : number = bodyRef.current.getBoundingClientRect().height;
            setBodyHeight(tempRef);
        }
    }

    /**
     * Style props for the expandable accordion component.
     */
    const accordionStyleProps = {
        overflow: "hidden"
    }

    /**
     * Style props for the text body container, inside of the expandable accordion.
     */
    const bodyContainerProps = {
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "text-align": "left"
    }

    /**
     * Style props for the image title / date container, outside of the expandable accordion.
     */
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
            <motion.div style={accordionStyleProps} initial={initialBodyProps} animate={{height: expanded ? bodyHeight : 0}} transition={{type: "easeInOut"}} >
                <div style={bodyContainerProps}>
                    <Typography ref={bodyRef} variant="body2" color="text.secondary">{imageExplanation}</Typography>
                </div>
            </motion.div>
        </div>
    )
}