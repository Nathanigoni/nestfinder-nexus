import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeatherMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For now, we'll use a placeholder. In a real app, you'd need a Mapbox token
    // mapboxgl.accessToken = 'your-mapbox-token';
    
    // Since we don't have a token, show a placeholder
    if (mapContainer.current) {
      mapContainer.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
          <div class="text-center">
            <div class="text-4xl mb-2">🗺️</div>
            <div class="text-lg font-semibold">Interactive Weather Map</div>
            <div class="text-sm opacity-80">Mapbox integration available</div>
          </div>
        </div>
      `;
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <Card className="backdrop-blur-md bg-white/20 border-white/20">
      <CardHeader>
        <CardTitle className="text-foreground">Weather Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mapContainer} className="w-full h-64 rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default WeatherMap;