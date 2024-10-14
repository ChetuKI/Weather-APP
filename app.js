let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let cityName ;
let urlcontd = "&appid=af3970c958cc1321409d7c798aba59d1&units=metric";

let ip = document.querySelector(".searchIp");
let btn = document.querySelector(".searchBtn");
let img = document.querySelector('.WeatherPhoto');
let h2 = document.querySelector(".degree");

btn.addEventListener("click",async () => {
    if(ip.value != ""){
        let result = await getData(ip.value);
        let resultInt = Math.floor(result.temp);
        h2.innerText = `${resultInt}°C`;
    }
    ip.value = "";
});

async function getData (city) {
    try {
        let res = await axios.get(url+city+urlcontd);
        return res.data.main;
    } catch (e) {
        console.log("Error : ",e);
        return {};
    }
}