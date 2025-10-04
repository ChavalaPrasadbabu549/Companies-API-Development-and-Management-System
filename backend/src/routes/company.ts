import { Router } from "express";
import { companyCreation, companyUpdate, companyById, companyDelete, companyList } from "../controllers/companyController";
import { Filters } from "../middleware/Filters";

const router = Router();
router.post('/creation', companyCreation);
router.put('/update/:id', companyUpdate);
router.get('/getAll', Filters, companyList);
router.get('/getbyId/:id', companyById);
router.delete('/delete/:id', companyDelete);

export default router;
