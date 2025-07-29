import { MapPin, Thermometer, Eye, Wind, Droplets, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CurrentWeatherProps {
  weather: {
    current: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      wind_speed: number;
      weather: Array<{ main: string; description: string; icon: string }>;
      visibility: number;
    };
    name: string;
  } | null;
}

const CurrentWeather = ({ weather }: CurrentWeatherProps) => {
  if (!weather) {
    return (
      <div className="animate-pulse">
        <Card className="backdrop-blur-md bg-white/20 border-white/20">
          <CardContent className="p-8">
            <div className="h-32 bg-white/20 rounded"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { current, name } = weather;
  const weatherCondition = current.weather[0]?.main.toLowerCase() || "clear";

  const getGradientClass = (condition: string) => {
    switch (condition) {
      case "clear":
        return "from-sunny via-yellow-400 to-orange-400";
      case "clouds":
        return "from-cloudy via-gray-400 to-blue-400";
      case "rain":
      case "drizzle":
        return "from-rainy via-blue-500 to-blue-700";
      case "thunderstorm":
        return "from-stormy via-purple-600 to-gray-800";
      case "snow":
        return "from-snowy via-blue-100 to-white";
      default:
        return "from-primary via-blue-500 to-blue-600";
    }
  };

  return (
    <Card className="backdrop-blur-md bg-white/20 border-white/20 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(weatherCondition)} opacity-20`}></div>
      <CardContent className="relative p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-foreground/80" />
            <span className="text-lg font-medium text-foreground">{name}</span>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-foreground">{Math.round(current.temp)}°</div>
            <div className="text-foreground/70">Feels like {Math.round(current.feels_like)}°</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-semibold text-foreground capitalize">
              {current.weather[0]?.description || "Clear sky"}
            </div>
            <div className="text-foreground/70">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
          <div className="text-6xl">
            {current.weather[0]?.icon ? 
              `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png` : 
              "☀️"
            }
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
            <Thermometer className="h-5 w-5 text-foreground/70" />
            <div>
              <div className="text-sm text-foreground/70">Pressure</div>
              <div className="font-semibold text-foreground">{current.pressure} hPa</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
            <Droplets className="h-5 w-5 text-foreground/70" />
            <div>
              <div className="text-sm text-foreground/70">Humidity</div>
              <div className="font-semibold text-foreground">{current.humidity}%</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
            <Wind className="h-5 w-5 text-foreground/70" />
            <div>
              <div className="text-sm text-foreground/70">Wind</div>
              <div className="font-semibold text-foreground">{current.wind_speed} m/s</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
            <Eye className="h-5 w-5 text-foreground/70" />
            <div>
              <div className="text-sm text-foreground/70">Visibility</div>
              <div className="font-semibold text-foreground">{(current.visibility / 1000).toFixed(1)} km</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;