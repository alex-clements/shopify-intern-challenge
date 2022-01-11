import React from 'react';

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
    
    console.log(val);
    localStorage.setItem("likedPics", JSON.stringify(likedPicsParsed));
}