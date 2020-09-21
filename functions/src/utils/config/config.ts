// @ts-ignore
import fs from 'fs';
// @ts-ignore
import * as functions from 'firebase-functions';

let fetched = false;
let config = functions.config();

getLocalConfig();

async function getLocalConfig () {
    if (!fetched && process.env.NODE_ENV !== 'production') {
        try {
            const localConfig = require('../../../.runtimeconfig.json');
            config = localConfig;
            fetched = true;
        } catch (err) {
            console.error('Error with .runtimeconfig.json', err);
        }
    }
}

export function getFirebaseConfig () {
    const baseConfig = JSON.parse(process.env.FIREBASE_CONFIG || '');
    return {
        ...baseConfig,
        apiKey: config.app.api_key,
        authDomain: config.app.auth_domain,
    };
}

export default config;
