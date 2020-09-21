// @ts-ignore
import * as firebase from 'firebase';
import 'firebase/firestore';
import { getFirebaseConfig } from '../config';

interface Cache {
    db: firebase.firestore.Firestore | null
}

const cache: Cache = {
    db: null,
};

export function getFirestore (): firebase.firestore.Firestore {
    if (cache.db) {
        return cache.db;
    }

    const firebaseConfig = getFirebaseConfig();

    if (!firebaseConfig) {
        throw new Error('Firebase config not found.');
    }

    firebase.initializeApp(firebaseConfig);

    if (process.env.NODE_ENV === 'dev') {
        console.log('Using emulated firestore.');
        firebase.firestore().settings({
            host: 'localhost:8080',
            ssl: false,
        });
    }

    cache.db = firebase.firestore();
    return cache.db;
}
