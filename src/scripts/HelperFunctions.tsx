export class HelperFunctions {
    formatDate(myDate : Date) {
        let myDays : string = myDate.getDate().toString();
        let myMonths : string = (myDate.getMonth() + 1).toString();
        let myYear : string = myDate.getFullYear().toString();
        let myString : string = myYear + "-" + myMonths.padStart(2, "0") + "-" + myDays.padStart(2, "0");
        return myString;
    }

    getEndDateStartDate(nextAvailableDate : string) : Array<string> {
        let startDate : Date = new Date();
        let endDate : Date = new Date();

        let dateOffset : number = (24 * 60 * 60 * 1000) * 5;

        startDate.setTime(new Date(nextAvailableDate).getTime());
        endDate.setTime(new Date(nextAvailableDate).getTime() - dateOffset);

        let startDateString : string = this.formatDate(startDate);
        let endDateString : string = this.formatDate(endDate);

        return [startDateString, endDateString]
    }

    getNextDate(nextAvailableDate : string) : string {
        let startDate : Date = new Date();
        startDate.setTime(new Date(nextAvailableDate).getTime());
        let nextDate : Date = new Date();
        let dateOffset : number = (24 * 60 * 60 * 1000) * 6;
        nextDate.setTime(startDate.getTime() - dateOffset);
        return nextDate.toString();
    }

    
}