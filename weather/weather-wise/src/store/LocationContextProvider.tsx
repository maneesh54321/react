import { createContext, ReactElement, useReducer } from "react";

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

type LocationState = { location: Location | null };

type LocationAction = { type: "SET_LOCATION"; payload: Location | null };

function locationReducer(state: LocationState, action: LocationAction) {
  if (action.type === "SET_LOCATION") {
    return {
      location: action.payload,
    };
  }
  return state;
}

type Props = { children: ReactElement };

export default function LocationContextProvider({ children }: Props) {
  const [locationState, locationDispatch] = useReducer(locationReducer, {
    location: null,
  });

  const setCurrentLocation = (location: Location | null) => {
    locationDispatch({ type: "SET_LOCATION", payload: location });
  };
  const locationCtxValue = {
    location: locationState.location,
    setCurrentLocation,
  };
  return (
    <LocationContext.Provider value={locationCtxValue}>
      {children}
    </LocationContext.Provider>
  );
}
