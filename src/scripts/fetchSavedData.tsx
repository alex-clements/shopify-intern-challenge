import fetchDataAbstract from './fetchDataAbstract';

/**
 * Takes an array of dates (as strings) and returns data for the corresponding dates from the NASA APOD API.
@param input_array {Array<String>} Array of dates as strings in the format 'YYYY-MM-DD'
@return Array of objects returned by the NASA APOD API 
*/
export default function fetchSavedData(input_array : Array<string>) : Promise<any[]> {
    let myPromises : Array<Promise<any>> = []
    let apiString : string;

    input_array.forEach((dateString) => {
        apiString = "&date=" + dateString
        myPromises.push(
            fetchDataAbstract(apiString)
        )
    })

    return Promise.all(myPromises).then((data) => {
        return data;
    })
}