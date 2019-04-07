import Client from "./models/Client";

export const FETCH_CLIENTS = 'FETCH_CLIENTS';

export const fetchClients = (clients:Client[]) => ({
    type: FETCH_CLIENTS,
    clients,
});