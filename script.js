const apiKey = '51a215a5ca9ea18c71fbace71c96cf34'; // Replace with your own API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';



const submitBtn = document.getElementById('submit');
const cityInput = document.getElementById('city');
const weatherDiv = document.getElementById('weather');

submitBtn.addEventListener('click', () => {
	const city = cityInput.value;
	if (!city) return;

	const url ="http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const { name, main: { temp, feels_like, humidity } } = data;
			
			
			
			
			
			
			weatherDiv.innerHTML = `
				<p>City: ${name}</p>
				<p>Temperature: ${temp}°C</p>
				<p>Feels like: ${feels_like}°C</p>
				<p>Humidity: ${humidity}%</p>
			`;
		})
		.catch(error => {
			console.error(error);
			weatherDiv.innerHTML = `<p>Error fetching weather data</p>`;
		});
});