import { WeatherConditions, WeatherInterface } from "@/app/domain/interfaces/WeatherInterface";

export class WeatherModel implements WeatherInterface {
    id: string;
    celsius: number;
    status: WeatherConditions;

    constructor(data: Partial<WeatherInterface>) {
        this.id = data.id || '';
        this.celsius = data.celsius || 0;
        this.status = data.status || WeatherConditions.Unknown;
    }

    static fromJson(json: any): WeatherModel {
        return new WeatherModel({
            id: json.id,
            celsius: json.celsius,
            status: json.status,
        });
    }
}