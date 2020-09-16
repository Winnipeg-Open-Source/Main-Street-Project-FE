// @ts-ignore
import fs from 'fs';
// @ts-ignore
import * as functions from 'firebase-functions';

let fetched = false;
let config = functions.config();

if (!fetched && process.env.NODE_ENV !== 'production') {
    try {
        const localConfig = require('../../../../.runtimeconfig.json');
        config = localConfig;
        fetched = true;
    } catch (err) {
        console.error('Could not find .runtimeconfig.json');
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
