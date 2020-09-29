import { getFirestore } from '../firebase';

interface Document {
    id: string
    data: () => {}
}

interface Filter {
    key: string
    match: string
    value: any
}

export const create = async (collection: string, data: object) => {
    const db = getFirestore();
    const doc = await db.collection(collection).add(data);
    return {
        id: doc.id,
        ...data,
    };
};

export const createMany = async (collection: string, data: Array<object>) => {
    const db = getFirestore();
    const batch = db.batch();

    data.forEach((datum: object) => {
        const docRef = db.collection(collection).doc();
        batch.set(docRef, datum);
    });

    return await batch.commit();
};

export const update = async (collection: string, id: string, data: object) => {
    const db = getFirestore();
    await db.collection(collection).doc(id).update(data);
    return {
        id,
        ...data,
    };
};

export const get = async (collection: string, id: string) => {
    const db = getFirestore();
    const doc = await db.collection(collection).doc(id).get();
    return doc.exists
        ? {
            id: doc.id,
            ...doc.data(),
        }
        : null;
};

export const getAll = async (collection: string, filters?: any) => {
    const db = getFirestore();
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
    const db = getFirestore();
    return await db.collection(collection).doc(id).delete();
};

export const transaction = async (collection: string, id: string, quantity: number) => {
    const db = getFirestore();
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
