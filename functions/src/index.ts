import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import apiRouter from './api';

admin.initializeApp();

const webapp = express();

webapp.use(cors({ origin: true }));
webapp.use('/api', apiRouter);

export const app = functions.https.onRequest(webapp);
