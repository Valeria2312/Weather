let city = document.querySelector('.search__input');
let mainWidget = document.querySelector('.weather_card');

// console.log(city);
// let temp_text = mainWidget.querySelector('.temp_text');
// console.log(temp_text);
// console.log(mainWidget);

city.addEventListener('change', buttonEvent);
// coordinates.addEventListener('chenge', request);


function _requestOpenWeatherApi(url) {
    let response = null;

    const application = new XMLHttpRequest();
    application.open('GET', url, async=false);
    application.setRequestHeader('Content-type', 'application/json');
    application.setRequestHeader('Access-Control-Allow-Origin', '*');
    application.send();
    response = JSON.parse(application.response);
    return response;
}

function createGetParamsFromObject(url, params) {
    let getStr = Object.entries(params).map((x) => `${x[0]}=${x[1]}`).join('&');
    return `${url}?${getStr}`;
}

function requestWeatherApi(query) {
    let corsPart = 'https://cors-anywhere.herokuapp.com/';
    let weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather';
    let url = corsPart + weatherApiUrl;

    let weatherApiKey = 'fe198ba65970ed3877578f728f33e0f9';
    let locale = 'ru';
    let params = {
        APPID: weatherApiKey,
        lang: locale,
        q: query || 'Москва',
        units: 'metric'
    };
    let getUrl = createGetParamsFromObject(url, params);
    return _requestOpenWeatherApi(getUrl);
}

let weatherWindInterface = {
    direction: null,
    speed: null
};

let weatherAnswerInterface = {
    name: null,
    temperature: null,
    humidity: null,
    wind: weatherWindInterface
};

function getPrettyWeatherAnswer(data) {
    let answer = JSON.parse(JSON.stringify(weatherAnswerInterface));

    answer.name = data?.name;
    answer.temperature = data?.main?.temp;
    answer.humidity = data?.main?.humidity ? data.main.humidity + '%' : null;
    answer.wind.speed = data?.wind?.speed;
    answer.wind.direction = data?.wind?.deg ? data.wind.deg + 'gr' : null;

    return answer;
}

function getWeatherByQuery(query) {
    let weatherInfo = requestWeatherApi(query);
    if (!weatherInfo) {
        return 'Что-то пошло не так';
    }

    return getPrettyWeatherAnswer(weatherInfo);
}

function buttonEvent() {
    let query = city.value;
    console.log(query);
    let answer = getWeatherByQuery(query);

    // console.log(answer);

    let now = new Date();
    mainWidget.querySelector('.today_text').textContent = now.toLocaleDateString();
    mainWidget.querySelector('.city_text').textContent = query;
    mainWidget.querySelector('.temp_text').textContent = answer.temperature ;
    mainWidget.querySelector('.speed_text').textContent = answer.wind.speed;
    mainWidget.querySelector('.percent_text').textContent = answer.humidity;
}

buttonEvent();

// let query = city;
// let answer = getWeatherByQuery(query);
//
// console.log(answer)
