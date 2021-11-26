const { axios } = require("axios")

const WEATHER_URL = "https://community-open-weather-map.p.rapidapi.com";
const HEADERS = { 
    'x-rapidapi-key': 'f4b90a37ccmsh9a367857d9a31a6p17f1c0jsnb129fd73a93d', 
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  };




let getWeatherAPI = async (city) => {
    return await axios.get(`${WEATHER_URL}/weather`, {
        params: {
            "q": city
        },
        headers: HEADERS
    })
}
