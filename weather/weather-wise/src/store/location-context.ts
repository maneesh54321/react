import { createContext } from "react";

import { Location } from "../utils/data.ts";

export interface LocationContextType {
    location: Location | null;
    setCurrentLocation: (newLocation: Location | null) => void;
}

const INITIAL_DATA: LocationContextType = {
  location: null,
  setCurrentLocation: (newLocation: Location | null) => {},
};

export const LocationContext = createContext<LocationContextType>(INITIAL_DATA);
