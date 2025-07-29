interface WeatherData {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    weather: Array<{ main: string; description: string; icon: string }>;
    visibility: number;
  };
  daily: Array<{
    dt: number;
    temp: { min: number; max: number };
    weather: Array<{ main: string; icon: string }>;
  }>;
  hourly: Array<{
    dt: number;
    temp: number;
    weather: Array<{ main: string; icon: string }>;
  }>;
  name: string;
}

export const weatherService = {
  getWeatherData: async (apiKey: string, city: string = "London"): Promise<WeatherData> => {
    if (!apiKey) {
      return {
        current: {
          temp: 22,
          feels_like: 24,
          humidity: 65,
          pressure: 1013,
          wind_speed: 3.5,
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          visibility: 10000
        },
        daily: [
          { dt: Date.now() / 1000, temp: { min: 18, max: 25 }, weather: [{ main: "Clear", icon: "01d" }] },
          { dt: Date.now() / 1000 + 86400, temp: { min: 20, max: 27 }, weather: [{ main: "Clouds", icon: "02d" }] },
          { dt: Date.now() / 1000 + 172800, temp: { min: 19, max: 24 }, weather: [{ main: "Rain", icon: "10d" }] },
          { dt: Date.now() / 1000 + 259200, temp: { min: 16, max: 22 }, weather: [{ main: "Rain", icon: "10d" }] },
          { dt: Date.now() / 1000 + 345600, temp: { min: 21, max: 28 }, weather: [{ main: "Clear", icon: "01d" }] }
        ],
        hourly: Array.from({ length: 24 }, (_, i) => ({
          dt: Date.now() / 1000 + (i * 3600),
          temp: 20 + Math.sin(i / 4) * 5,
          weather: [{ main: "Clear", icon: "01d" }]
        })),
        name: city
      };
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${apiKey}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return weatherService.getWeatherData("", city);
    }
  }
};