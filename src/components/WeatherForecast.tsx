import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, fromUnixTime } from "date-fns";

interface ForecastProps {
  forecast: Array<{
    dt: number;
    temp: { min: number; max: number };
    weather: Array<{ main: string; icon: string }>;
  }> | null;
}

const WeatherForecast = ({ forecast }: ForecastProps) => {
  if (!forecast) {
    return (
      <Card className="backdrop-blur-md bg-white/20 border-white/20">
        <CardHeader>
          <CardTitle>5-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-white/20 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="backdrop-blur-md bg-white/20 border-white/20">
      <CardHeader>
        <CardTitle className="text-foreground">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {forecast.slice(0, 5).map((day, index) => (
          <div
            key={day.dt}
            className="flex items-center justify-between p-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">
                {day.weather[0]?.icon ? "🌤️" : "☀️"}
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {index === 0 ? "Today" : format(fromUnixTime(day.dt), "EEEE")}
                </div>
                <div className="text-sm text-foreground/70 capitalize">
                  {day.weather[0]?.main || "Clear"}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-foreground">
                {Math.round(day.temp.max)}°
              </div>
              <div className="text-sm text-foreground/70">
                {Math.round(day.temp.min)}°
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;