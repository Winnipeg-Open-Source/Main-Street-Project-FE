import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mockAxios = null;

if (!mockAxios) {
    mockAxios = new MockAdapter(axios, { delayResponse: 500 });
}

export default mockAxios;
