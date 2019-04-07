import IClient from "./models/Client";
import ITrader from "./models/Trader";
import {FETCH_CLIENTS} from './actions';

export type State = {
    readonly clients: IClient[];
    readonly traders: ITrader[];
}

export const initialState: State = {
    clients: [],
    traders: []
};

export default function Reducer (state: State = initialState, action: any) {
    switch (action.type) {
        case FETCH_CLIENTS:
            return {
                ...state, clients: action.payload
            }
        default:
            return state;
    }
};