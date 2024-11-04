const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControllers');

router.post('/add', employeeController.createEmployee);
router.get('/all', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;