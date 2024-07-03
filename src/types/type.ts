export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

export interface CurrentWeatherProps {
  data: WeatherData | null;
  temperatureUnit: string;
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastData {
  list: ForecastItem[];
}

export interface ForecastProps {
  data: ForecastData | null;
  temperatureUnit: string;
}

export interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}