import { WeatherInterface } from "@/features/domain/interfaces/WeatherInterface";
import { WeatherRepository } from "@/features/domain/repository/WeatherRepository";
import { WeatherRemoteDataSource } from "../datasource/WeatherRemoteDataSource";

export class WeatherRepositoryImpl implements WeatherRepository {
    constructor(private readonly weatherRemoteDataSource: WeatherRemoteDataSource) { }

    async getByCoordinates(latitude: number, longitude: number): Promise<WeatherInterface | null> {
        try {
            const res = await this.weatherRemoteDataSource.getByCoordinates(latitude, longitude);
            if (res === null) return null;
            return res;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}