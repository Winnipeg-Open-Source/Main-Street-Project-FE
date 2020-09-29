// @ts-ignore
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebaseConfig } from '../config';

interface Cache {
    provider: firebase.auth.GoogleAuthProvider | null,
    auth: firebase.auth.Auth | null,
    db: firebase.firestore.Firestore | null
}

const cache: Cache = {
    provider: null,
    auth: null,
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

    cache.provider = new firebase.auth.GoogleAuthProvider();
    // @ts-ignore
    cache.auth = new firebase.auth();
    cache.db = firebase.firestore();

    return cache.db;
}

getFirestore();
