import React, {useState} from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {motion} from 'framer-motion';
import setStorageItems from '../scripts/setStorageItems';
import isInStorage from '../scripts/isInStorage';

export default function FavouriteButton(props : any) {
    const [clicked, setClicked] = useState(isInStorage(props.imageDate));
    const [clickBounce, setClickBounce] = useState(false);
    const [imageDate, setImageDate] = useState(props.imageDate);
    const [componentTabIndex, setComponentTabIndex] = useState(props.componentTabIndex);

    const handleClick = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setClicked(!clicked);
        setClickBounce(!clickBounce);
        setStorageItems(imageDate, !clicked);
        setTimeout(function(){setClickBounce(!clickBounce)}, 200);
    }

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
        <motion.button tabIndex={componentTabIndex} style={{"borderWidth": "0px", "backgroundColor": "white"}} whileHover={{scale: 1.2}} onClick={handleClick} animate={animation()} transition={{duration: 0.4}}>
            {clicked ? <Favorite sx={{color: "pink"}} /> : <FavoriteBorder sx={{color: "pink"}} />}
        </motion.button>
    )
}