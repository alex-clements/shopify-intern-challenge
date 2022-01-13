export default function fetchDataAbstract(apiString : string) {
    console.log("Fetching data from: ", apiString);
    let newAPIString : string = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_API_KEY + "&test";
    console.log(newAPIString);
    return fetch(apiString)
        .then(response => {
            if (response.ok) {
                console.log("Rate Limit Remaining: ", response.headers.get("X-RateLimit-Remaining"));
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