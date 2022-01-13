/**
 * Class with several date-related helper functions for the application.
 */
export class HelperFunctions {
    /**
     * Converts a Date to a string in the format "YYYY-MM-DD".
     * @param myDate Date to be formatted as a string.
     * @returns String in the format "YYYY-MM-DD".
     */
    formatDate(myDate : Date) {
        let myDays : string = myDate.getDate().toString();
        let myMonths : string = (myDate.getMonth() + 1).toString();
        let myYear : string = myDate.getFullYear().toString();
        let myString : string = myYear + "-" + myMonths.padStart(2, "0") + "-" + myDays.padStart(2, "0");
        return myString;
    }

    /**
     * Takes in a date formatted as a string, and returns an array of date strings -> index 0 has the date provided and the index 1 has the date 5 days in the past.
     * @param nextAvailableDate Date as a string in the format "YYYY-MM-DD".
     * @returns Array in format [start_date, end_date] where end date is 5 days in the past and start date is the date provided.
     */
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

    /**
     * Takes in a date as a string in the format "YYYY-MM-DD" and returns the date 6 days prior, also as a string in the format "YYYY-MM-DD".
     * @param nextAvailableDate Date as a string in the format "YYYY-MM-DD".
     * @returns Date 6 days prior to the nextAvailableDate provided, as a string in the format "YYYY-MM-DD"
     */
    getNextDate(nextAvailableDate : string) : string {
        let startDate : Date = new Date();
        startDate.setTime(new Date(nextAvailableDate).getTime());
        let nextDate : Date = new Date();
        let dateOffset : number = (24 * 60 * 60 * 1000) * 6;
        nextDate.setTime(startDate.getTime() - dateOffset);
        return nextDate.toString();
    }
}