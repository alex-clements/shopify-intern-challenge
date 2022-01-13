import React, {useState} from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {motion} from 'framer-motion';
import setStorageItems from '../scripts/setStorageItems';
import isInStorage from '../scripts/isInStorage';

/**
 * Component for the favourite / like button.
 * @param props React props.
 * @returns React functional component.
 */
export default function FavouriteButton(props : FavouriteButtonProps) {
    const [clicked, setClicked] = useState(isInStorage(props.imageDate));
    const [clickBounce, setClickBounce] = useState(false);
    const [imageDate, setImageDate] = useState(props.imageDate);

    /**
     * handler for the click event.
     * @param e React mouse event.
     */
    const handleClick = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setClicked(!clicked);
        setClickBounce(!clickBounce);
        setStorageItems(imageDate, !clicked);
        setTimeout(function(){setClickBounce(!clickBounce)}, 200);
    }

    /**
     * Sets the animation when the button is clicked.
     * @returns props for the button animation.
     */
    const animation = () => {
        if (!clicked) {
            return {
                y: 0
            }
        } else {
            return {
                y : [0, -10, 0]
            }
        }
    }

    return (
        <motion.button tabIndex={0} style={{"borderWidth": "0px", "backgroundColor": "white"}} 
        whileHover={{scale: 1.2}} onClick={handleClick} animate={animation()} transition={{duration: 0.4}}>
            {clicked ? <Favorite sx={{color: "pink"}} /> : <FavoriteBorder sx={{color: "pink"}} />}
        </motion.button>
    )
}