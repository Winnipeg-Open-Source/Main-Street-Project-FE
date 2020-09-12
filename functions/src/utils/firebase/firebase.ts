import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfigProd from '../../../firebase-config.prod.json';
import firebaseConfigQA from '../../../firebase-config.qa.json';

interface Document {
    id: string
    data: () => {}
}

interface Filter {
    key: string
    match: string
    value: any
}

const firebaseConfig = process.env.GCLOUD_PROJECT === 'Main Street Project QA'
    ? firebaseConfigQA
    : firebaseConfigProd;

let provider: any, auth: any, db: any;

if (process.env.NODE_ENV !== 'test') {
    firebase.initializeApp(firebaseConfig);

    if (process.env.NODE_ENV === 'dev') {
        console.log('Using emulated firestore.');
        firebase.firestore().settings({
            host: 'localhost:8080',
            ssl: false,
        });
    }

    provider = new firebase.auth.GoogleAuthProvider();
    // @ts-ignore
    auth = new firebase.auth();
    db = firebase.firestore();
}

export {
    auth,
    db,
    provider,
};

export const create = async (collection: string, data: object) => {
    const doc = await db.collection(collection).add(data);
    return {
        id: doc.id,
        ...data,
    };
};

export const createMany = async (collection: string, data: Array<object>) => {
    const batch = db.batch();

    data.forEach((datum: object) => {
        const docRef = db.collection(collection).doc();
        batch.set(docRef, datum);
    });

    return await batch.commit();
};

export const update = async (collection: string, id: string, data: object) => {
    await db.collection(collection).doc(id).update(data);
    return {
        id,
        ...data,
    };
};

export const get = async (collection: string, id: string) => {
    const doc = await db.collection(collection).doc(id).get();
    return doc.exists
        ? {
            id: doc.id,
            ...doc.data(),
        }
        : null;
};

export const getAll = async (collection: string, filters?: any) => {
    const docRef = db.collection(collection);

    const query = filters
        ? filters.reduce((que: any, filter: Filter) => {
            return que.where(filter.key, filter.match, filter.value);
        }, docRef)
        : docRef;

    const documents = await query.get();

    let response: any = [];
    documents.forEach((doc: Document) => {
        response = [
            ...response,
            {
                id: doc.id,
                ...doc.data(),
            },
        ]
    });

    return response;
};

export const deleteOne = async (collection: string, id: string) => {
    return await db.collection(collection).doc(id).delete();
};

export const transaction = async (collection: string, id: string, quantity: number) => {
    return await db.runTransaction(async (trans: any) => {
        const ref = db.collection(collection).doc(id);
        const doc = await trans.get(ref);

        if (!doc.exists()) {
            throw Error("Document does not exist");
        }

        const newQuantity = doc.data().quantity + quantity;
        const newDoc = await trans.update(ref, { quantity: newQuantity });
        return newDoc;
    });
};

export const createBatch = () => db.batch();
