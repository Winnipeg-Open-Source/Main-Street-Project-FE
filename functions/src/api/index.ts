import express from 'express';
import AuthenticationRouter from './authentication';
import DonationsRouter from './donations';
import DonorsRouter from './donors';
import EmployeesRouter from './employees';
import ItemsRouter from './items';
import LocationsRouter from './locations';
import RequisitionsRouter from './requisitions';
import UsersRouter from './users';
import requireAdmin from '../middleware/requireAdmin';

const router = express.Router();

router.use('/', AuthenticationRouter);
router.use('/donations', DonationsRouter);
router.use('/donors', DonorsRouter);
router.use('/employees', EmployeesRouter);
router.use('/items', ItemsRouter);
router.use('/locations', LocationsRouter);
router.use('/requisitions', RequisitionsRouter);
router.use('/users', requireAdmin, UsersRouter);

export default router;
