import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WeatherApiKeyProps {
  onApiKeySubmit: (apiKey: string) => void;
  apiKey: string;
}

const WeatherApiKey = ({ onApiKeySubmit, apiKey }: WeatherApiKeyProps) => {
  const [localApiKey, setLocalApiKey] = useState(apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApiKeySubmit(localApiKey);
  };

  const handleUseMockData = () => {
    onApiKeySubmit("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/30 border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Weather Dashboard</CardTitle>
          <p className="text-muted-foreground">
            Enter your OpenWeather API key to get live weather data
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="apiKey">OpenWeather API Key</Label>
              <Input
                id="apiKey"
                type="text"
                placeholder="Enter your API key..."
                value={localApiKey}
                onChange={(e) => setLocalApiKey(e.target.value)}
                className="bg-white/50 border-white/30"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Get your free API key at openweathermap.org
              </p>
            </div>
            <Button type="submit" className="w-full">
              Use API Key
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={handleUseMockData}
            className="w-full bg-white/20 border-white/30 hover:bg-white/30"
          >
            Use Demo Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherApiKey;