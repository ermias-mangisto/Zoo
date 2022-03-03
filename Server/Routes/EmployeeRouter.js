const EmployeeRouter=require('express').Router()
const EmployeeController=require('../Controllers/EmployeeController')
EmployeeRouter.get('/',EmployeeController.Get)
EmployeeRouter.get('/:id',EmployeeController.GetById)
EmployeeRouter.post('/add',EmployeeController.Add)
EmployeeRouter.put('/:id',EmployeeController.Update)
EmployeeRouter.delete('/:id',EmployeeController.Delete)

module.exports=EmployeeRouter;