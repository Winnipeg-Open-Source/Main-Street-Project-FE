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
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

router.use('/', AuthenticationRouter);
router.use('/donations', requireAuth, DonationsRouter);
router.use('/donors', requireAuth, DonorsRouter);
router.use('/employees', requireAuth, EmployeesRouter);
router.use('/items', requireAuth, ItemsRouter);
router.use('/locations', requireAuth, LocationsRouter);
router.use('/requisitions', requireAuth, RequisitionsRouter);
router.use('/users', requireAdmin, UsersRouter);

export default router;
