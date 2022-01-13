/**
 * Converts a Date to a string in the format "YYYY-MM-DD".
 * @param myDate Date to be formatted as a string.
 * @returns String in the format "YYYY-MM-DD".
 */
const formatDate = (myDate : Date) : string => {
    let myDays : string = myDate.getDate().toString();
    let myMonths : string = (myDate.getMonth() + 1).toString();
    let myYear : string = myDate.getFullYear().toString();
    let myString : string = myYear + "-" + myMonths.padStart(2, "0") + "-" + myDays.padStart(2, "0");
    return myString;
}

export default formatDate;