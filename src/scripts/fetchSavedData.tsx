import fetchDataAbstract from './fetchDataAbstract';

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