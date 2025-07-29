import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { format, fromUnixTime } from "date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface WeatherChartProps {
  hourlyData: Array<{
    dt: number;
    temp: number;
    weather: Array<{ main: string; icon: string }>;
  }> | null;
}

const WeatherChart = ({ hourlyData }: WeatherChartProps) => {
  if (!hourlyData) {
    return (
      <Card className="backdrop-blur-md bg-white/20 border-white/20">
        <CardHeader>
          <CardTitle>24-Hour Temperature</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-white/20 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  const next24Hours = hourlyData.slice(0, 24);

  const chartData = {
    labels: next24Hours.map((hour) => format(fromUnixTime(hour.dt), "HH:mm")),
    datasets: [
      {
        label: "Temperature (°C)",
        data: next24Hours.map((hour) => Math.round(hour.temp)),
        borderColor: "rgba(59, 130, 246, 0.8)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y}°C`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(0, 0, 0, 0.7)",
          maxTicksLimit: 8,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(0, 0, 0, 0.7)",
          callback: function(value: any) {
            return `${value}°`;
          },
        },
      },
    },
  };

  return (
    <Card className="backdrop-blur-md bg-white/20 border-white/20">
      <CardHeader>
        <CardTitle className="text-foreground">24-Hour Temperature Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherChart;