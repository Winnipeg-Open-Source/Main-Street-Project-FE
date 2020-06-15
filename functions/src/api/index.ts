import express from 'express';
import DonorsRouter from './donors';
import ItemsRouter from './items';
import LocationsRouter from './locations';
import RequisitionsRouter from './requisitions';

const router = express.Router();

// router.use('/donations', null);
router.use('/donors', DonorsRouter);
router.use('/items', ItemsRouter);
router.use('/locations', LocationsRouter);
router.use('/requisitions', RequisitionsRouter);

export default router;
