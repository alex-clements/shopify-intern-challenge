/**
 * Retrieves an array of the dates of liked pictures from the browser's local storage.
 * @returns Array of the dates of all liked pictures.  Dates are strings in the format "YYYY-MM-DD".
 */
export default function getStorageItems() : Array<string> {

    let likedPics = localStorage.getItem("likedPics");

    if (likedPics) {
        return JSON.parse(likedPics);
    } else {
        localStorage.setItem("likedPics", JSON.stringify([]));
    }

    return []
}