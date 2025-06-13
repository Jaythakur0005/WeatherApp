# Weather App

A modern, responsive weather application that displays current weather information for any city using the OpenWeatherMap API.

## Features

- Search weather by city name
- Display current temperature, weather description, and weather icon
- Show additional information (humidity and wind speed)
- Loading spinner while fetching data
- Responsive design for mobile and desktop
- Error handling for invalid cities and network errors
- Remember last searched city using localStorage
- Support for pressing Enter key to search

## Setup Instructions

1. Clone this repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Get your API key:
- Go to [OpenWeatherMap](https://openweathermap.org/api)
- Sign up for a free account
- Get your API key from your account dashboard

3. Update the API key:
- Open `app.js`
- Replace `'YOUR_API_KEY'` with your actual API key

4. Install dependencies:
```bash
npm install
```

5. Start the development server:
```bash
npm start
```

6. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox)
- JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome icons

## Project Structure

```
weather-app/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── app.js          # JavaScript logic
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Browser Support

The app works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT 