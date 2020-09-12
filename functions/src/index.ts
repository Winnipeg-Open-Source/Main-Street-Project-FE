import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import express from 'express';
// @ts-ignore
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authMiddleware from './middleware/authentication/authentication';
import apiRouter from './api';

// @ts-ignore
import serviceAccountKeyProd from '../key.prod.json';
import serviceAccountKeyQA from '../key.qa.json';

const serviceAccountKey = process.env.GCLOUD_PROJECT === 'Main Street Project QA'
    ? serviceAccountKeyQA
    : serviceAccountKeyProd;

admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccountKey)
});

const webapp = express();

webapp.use(cookieParser());
webapp.use(cors({ origin: true }));
webapp.use('/api', authMiddleware, apiRouter);

export const app = functions.https.onRequest(webapp);
