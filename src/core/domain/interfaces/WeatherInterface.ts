export enum WeatherConditions {
    Winter,
    Fog,
    Windy,
    Lightning,
    Unknown
}

export interface WeatherInterface {
    id: string;
    celsius: number;
    status: WeatherConditions;
}