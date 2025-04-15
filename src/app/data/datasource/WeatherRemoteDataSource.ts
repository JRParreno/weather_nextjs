import { WeatherConditions } from "@/app/domain/interfaces/WeatherInterface";
import { WeatherModel } from "../models/WeatherModel";
import { fetchWeatherApi } from 'openmeteo';

export interface WeatherRemoteDataSource {
    getByCoordinates(latitude: number, longitude: number): Promise<WeatherModel | null>;
}

export class WeatherRemoteDataSourceImpl implements WeatherRemoteDataSource {
    async getByCoordinates(latitude: number, longitude: number): Promise<WeatherModel | null> {
        // Simulate a network request to fetch weather data based on coordinates
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, {
            "latitude": latitude,
            "longitude": longitude,
            "hourly": "temperature_2m"
        });

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Extract temperature in Celsius from the response
        const data = {
            "id": 1,
            "celsius": 30, // Assuming the API returns an array of temperatures
            "status": WeatherConditions.Windy,
        };

        return WeatherModel.fromJson(data); // Assuming the API returns data in the same format as WeatherInterface
    }
}