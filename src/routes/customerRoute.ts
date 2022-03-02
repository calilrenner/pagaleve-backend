import express from 'express';
import * as customerController from '../controllers/customer';
import schemaValidatingMiddleware from '../middlewares/schemaValidationMiddleware';
import customerSchema from '../schemas/customerSchema';

const router = express.Router();

router.get('/', customerController.findCustomers);
router.delete('/delete-customer', customerController.deleteCustomers);
router.put(
    '/upsert-customer',
    schemaValidatingMiddleware(customerSchema),
    customerController.upsertCustomer,
);

export default router;
