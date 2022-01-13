/**
 * Determines if a given date is in the array of liked pictures.
 * @param item Date in the format "YYYY-MM-DD".
 * @returns Boolean.
 */
export default function isInStorage(item : string) : boolean {
    let likedPics = localStorage.getItem("likedPics");
    let likedPicsParsed : Array<String> = likedPics != null ? JSON.parse(likedPics) : [];

    let index : number = likedPicsParsed.indexOf(item);

    if (index > -1) {
        return true;
    } else {
        return false;
    }

}