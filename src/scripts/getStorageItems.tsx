import React from 'react';

export default function getStorageItems() {

    let likedPics = localStorage.getItem("likedPics");

    if (likedPics) {
        return JSON.parse(likedPics);
    } else {
        localStorage.setItem("likedPics", JSON.stringify([]));
    }

    return localStorage.getItem("likedPics");
}