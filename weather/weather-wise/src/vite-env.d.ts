/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FORECAST_API_BASE_URL: string;
  readonly VITE_ATMOSPHERE_API_BASE_URL: string;
  readonly VITE_LOCATION_API_BASE_URL: string;
  readonly VITE_OPENSTREET_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
