import { createContext } from "react";

import { Location } from "../utils/data";

export interface LocationContextType {
  location: Location | null;
  setCurrentLocation: (newLocation: Location | null) => void;
}

const INITIAL_DATA: LocationContextType = {
  location: null,
  setCurrentLocation: () => {},
};

export const LocationContext = createContext<LocationContextType>(INITIAL_DATA);
