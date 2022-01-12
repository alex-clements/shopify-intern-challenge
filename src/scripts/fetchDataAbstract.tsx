export default function fetchDataAbstract(apiString : string) {
    console.log("Fetching data from: ", apiString);
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