export default function fetchDataAbstract(apiString : string) {
    fetch(apiString)
        .then(response => response.json())
        .then(data => {return data});
}