'use client';

import { useEffect, useState } from "react";
import { WeatherRepositoryImpl } from "../data/repository/WeatherRepositoryImpl";
import { WeatherInterface } from "../domain/interfaces/WeatherInterface";
import { WeatherRemoteDataSourceImpl } from "../data/datasource/WeatherRemoteDataSource";

export default function WeatherPage() {
    const [weather, setWeather] = useState<WeatherInterface | null>(null);

    useEffect(() => {
      async function fetchWeather() {
        const repo = new WeatherRepositoryImpl(new WeatherRemoteDataSourceImpl());
        const result = await repo.getByCoordinates(14.5995, 120.9842); // Example: Manila
        setWeather(result);
      }
  
      fetchWeather();
    }, []);
  
    if (!weather) return <div>Loading weather...</div>;
  
    return (
      <div>
        <h1>{weather.celsius}</h1>
        <p>{weather.status}</p>
      </div>
    );
}