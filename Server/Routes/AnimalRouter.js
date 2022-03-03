const AnimalRouter=require('express').Router()
const AnimalController=require('../Controllers/AnimalController')
AnimalRouter.get('/',AnimalController.Get)
AnimalRouter.get('/:id',AnimalController.GetById)
AnimalRouter.post('/add',AnimalController.Add)
AnimalRouter.put('/:id',AnimalController.Update)
AnimalRouter.delete('/:id',AnimalController.Delete)

module.exports=AnimalRouter;