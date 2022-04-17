import axios from "axios";

const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/favicons',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const jsonbinApiClient = axios.create({
    baseURL: "https://api.jsonbin.io/v3/b/" + process.env.REACT_APP_BIN_ID,
    withCredentials: false,
    headers: {
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014" + process.env.REACT_APP_X_Master_Key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: "https://krat.es/" + process.env.REACT_APP_Krate_ID,
    withCredentials: false,
    headers: {
        "x-api-key": process.env.REACT_APP_x_api_key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const getJsonplaceholderFaviconsJson = () => {
    return jsonplaceholderApiClient.get('/favicons')
}
const patchJsonplaceholderFaviconsJson = (id, avatars) => {
    return jsonplaceholderApiClient.patch('/favicons/' + id, avatars)
}
const getJsonbinFaviconsJson = () => {
    return jsonbinApiClient.get('/latest')
}
const putJsonbinFaviconsJson = (favicons) => {
    return jsonbinApiClient.put('', favicons)
}
const getKratesFaviconsJson = () => {
    return kratesApiClient.get("/record/624b08405a015dc4d2223b2f")
}
const putKratesFaviconsJson = (favicons) => {
    return kratesApiClient.put('/624b08405a015dc4d2223b2f', favicons)
};

const Service = { getJsonplaceholderFaviconsJson, patchJsonplaceholderFaviconsJson, getJsonbinFaviconsJson, putJsonbinFaviconsJson, getKratesFaviconsJson, putKratesFaviconsJson }

export default Service;
