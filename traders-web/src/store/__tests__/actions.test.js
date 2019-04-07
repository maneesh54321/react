import { FETCH_CLIENTS, fetchClients } from '../actions';

describe('Actions', () => {

    it('should create action to fetch clients', () => {
        const clients = [{
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
        const expectedAction = {
            type: FETCH_CLIENTS,
            clients
        };
        expect(fetchClients(clients)).toEqual(expectedAction);
    });

});