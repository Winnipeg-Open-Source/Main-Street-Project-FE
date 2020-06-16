import express from 'express';
import DonationsRouter from './donations';
import DonorsRouter from './donors';
import EmployeesRouter from './employees';
import ItemsRouter from './items';
import LocationsRouter from './locations';
import RequisitionsRouter from './requisitions';

const router = express.Router();

router.use('/donations', DonationsRouter);
router.use('/donors', DonorsRouter);
router.use('/employees', EmployeesRouter);
router.use('/items', ItemsRouter);
router.use('/locations', LocationsRouter);
router.use('/requisitions', RequisitionsRouter);

export default router;
