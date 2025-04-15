import { WeatherInterface } from "../interfaces/WeatherInterface";
import { WeatherRepository } from "../repository/WeatherRepository";

export class GetByCoordinates {
    constructor(private readonly weatherRepository: WeatherRepository,
        private readonly latitude: number,
        private readonly longitude: number

    ) {

    }

    async execute(id: string): Promise<WeatherInterface | null> {
        return await this.weatherRepository.getByCoordinates(this.latitude, this.longitude);
    }
}