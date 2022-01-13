import React from 'react';

/**
 * Adds or removes a date from the liked pictures array in the local storage.
 * @param val Date as a string in the format "YYYY-MM-DD".
 * @param add Boolean. True if date should be added to the liked pictures array, or False if date should be removed.
 */
export default function setStorageItems(val : string, add : boolean) {
    let likedPics = localStorage.getItem("likedPics");
    let likedPicsParsed : Array<String> = likedPics != null ? JSON.parse(likedPics) : [];
    if (add) {
        likedPicsParsed.push(val);
    } else {
        let index : number = likedPicsParsed.indexOf(val);
        if (index > -1) {
            likedPicsParsed.splice(index, 1);
        }
    }
    
    localStorage.setItem("likedPics", JSON.stringify(likedPicsParsed));
}