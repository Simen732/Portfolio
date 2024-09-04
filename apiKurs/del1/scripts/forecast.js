let apikey = "kX4izuCKOvJtJq9L8gevGDGbnh7SAgiU"

const getCity = async (city) => {
    let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${apikey}&q=${city}`;
    
    let response = await fetch(base + query);   
    let data = await response.json();
    
    return data[0];


    
}

let getWeather = async (id) => {
    console.log("running")
    let base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${id}?apikey=${apikey}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];

}



