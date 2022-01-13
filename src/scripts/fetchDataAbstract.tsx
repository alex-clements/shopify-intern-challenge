/**
 * Takes an input string and creates the API request to the NASA APOD API.  Returns an array of objects.
 * @param apiPartialString should have a format recognized by the NASA APOD API, starting after the API key parameter.
 * @returns Array of objects returned by the NASA APOD API.
 */
export default function fetchDataAbstract(apiPartialString : string) {
    let apiString : string = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_API_KEY + apiPartialString;
    return fetch(apiString)
        .then(response => {
            if (response.ok) {
                console.log("Data fetched successfully. Rate Limit Remaining: ", response.headers.get("X-RateLimit-Remaining"));
                return response.json();
            } else {
                throw new Error("Data fetch failed.");
            }
        })
        .then(data => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
}