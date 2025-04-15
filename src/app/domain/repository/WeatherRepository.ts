import { WeatherInterface } from "../interfaces/WeatherInterface";

export interface WeatherRepository {
    getByCoordinates(latitude: number, longitude: number): Promise<WeatherInterface | null>;
}