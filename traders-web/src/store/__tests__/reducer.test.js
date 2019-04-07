import Reducer, { initialState } from "../reducer";
import {FETCH_CLIENTS} from "../actions";

describe('Reducer', function () {
    let clients;
    beforeEach(() => {
        clients = [{
            bdrId: 1234,
            name: 'test name1',
            businessAddress:'test business address1',
            registeredAddress:'test registered address1'
        }, {
            bdrId: 23456,
            name: 'test name2',
            businessAddress:'test business address2',
            registeredAddress:'test registered address2'
        }];
    });

    it('should return initial state', function () {
        expect(Reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_CLIENTS on initial state', () => {
        expect(Reducer({
            clients: [],
            traders: []
        }, { type: FETCH_CLIENTS, payload: clients })).toEqual({clients, traders:[]});
    });

    it('should handle FETCH_CLIENTS on existing state', () => {
        expect(Reducer({
            clients: [{
                bdrId: 4678,
                name: 'test name2',
                businessAddress:'test business address2',
                registeredAddress:'test registered address2'
            }],
            traders: []
        }, { type: FETCH_CLIENTS, payload: clients })).toEqual({clients, traders:[]});
    })
});