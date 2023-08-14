import { Router } from 'express'
import { createEmployee, readEmployees, updateEmployee,deleteEmployee, readEmployee } from '../controller/employees.controller.js'

const router = Router()

router.post('/employees', createEmployee)
router.get('/employees', readEmployees)
router.get('/employees/:id', readEmployee)
router.patch('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)

export default router