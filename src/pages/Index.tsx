import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherForecast from "@/components/WeatherForecast";
import WeatherChart from "@/components/WeatherChart";
import WeatherMap from "@/components/WeatherMap";
import WeatherApiKey from "@/components/WeatherApiKey";
import { weatherService } from "@/services/weatherService";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem("weatherApiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      fetchWeatherData(savedApiKey);
    }
  }, []);

  const fetchWeatherData = async (key: string) => {
    setLoading(true);
    try {
      const data = await weatherService.getWeatherData(key);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    localStorage.setItem("weatherApiKey", key);
    fetchWeatherData(key);
  };

  if (!apiKey && !loading) {
    return <WeatherApiKey onApiKeySubmit={handleApiKeySubmit} apiKey={apiKey} />;
  }

  const getWeatherBackground = () => {
    if (!weatherData?.current?.weather?.[0]?.main) {
      return "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600";
    }
    
    const condition = weatherData.current.weather[0].main.toLowerCase();
    switch (condition) {
      case "clear":
        return "bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500";
      case "clouds":
        return "bg-gradient-to-br from-gray-400 via-gray-500 to-blue-500";
      case "rain":
      case "drizzle":
        return "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700";
      case "thunderstorm":
        return "bg-gradient-to-br from-purple-600 via-gray-700 to-gray-800";
      case "snow":
        return "bg-gradient-to-br from-blue-100 via-blue-200 to-white";
      default:
        return "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600";
    }
  };

  return (
    <div className={`min-h-screen ${getWeatherBackground()} transition-all duration-1000`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <CurrentWeather weather={weatherData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <WeatherForecast forecast={weatherData?.daily} />
          <WeatherMap />
        </div>
        
        <WeatherChart hourlyData={weatherData?.hourly} />
      </main>
    </div>
  );
};

export default Index;
