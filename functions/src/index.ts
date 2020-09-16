// @ts-ignore
import * as admin from 'firebase-admin';
// @ts-ignore
import * as functions from 'firebase-functions';
import express from 'express';
// @ts-ignore
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authMiddleware from './middleware/authentication/authentication';
import apiRouter from './api';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

const webapp = express();

webapp.use(cookieParser());
webapp.use(cors({ origin: true }));
webapp.use('/api', authMiddleware, apiRouter);

export const app = functions.https.onRequest(webapp);
