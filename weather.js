const apiKey = "264d736f9d1df8fc9e4a3326b5df2998";

const weather = document.querySelector(".weather");

// 유저 위치 가져오기
const geoSuccess = (e) => {
	const lat = e.coords.latitude;
	const lon = e.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const location = data.name;
			const weather = data.weather[0].main;
			const temp = Math.floor(data.main.temp);
			const weatherCon = document.querySelector(".weather");

			weatherCon.innerText = `${location} ${weather} ${temp}\u00b0C`;
		});
};

const geoErr = () => {
	weather.innerText = "위치 못받아옴";
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);

getTime();
setInterval(getTime, 6000);
