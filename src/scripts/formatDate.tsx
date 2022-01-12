const formatDate = (myDate : Date) => {
    let myDays : string = myDate.getDate().toString();
    let myMonths : string = (myDate.getMonth() + 1).toString();
    let myYear : string = myDate.getFullYear().toString();
    let myString : string = myYear + "-" + myMonths.padStart(2, "0") + "-" + myDays.padStart(2, "0");
    return myString;
}

export default formatDate;