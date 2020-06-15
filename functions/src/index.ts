import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import apiRouter from './api';

admin.initializeApp();

const app = express();

app.use('/', apiRouter);

export const api = functions.https.onRequest(app);
