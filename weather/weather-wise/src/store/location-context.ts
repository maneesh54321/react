import { createContext } from "react";

import { Location } from "../utils/data.ts";

const INITIAL_DATA: {
  location: Location | null;
  setCurrentLocation: (newLocation: Location) => void;
} = {
  location: null,
  setCurrentLocation: (newLocation: Location) => {},
};

export const LocationContext = createContext(INITIAL_DATA);
