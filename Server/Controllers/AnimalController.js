const Animal=require('../Models/AnimalModel')
const Get= async(req, res)=>{
  await Animal.find()
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(404).send({message: "err"}))
    
};
const GetById=async(req, res)=>{
   await Animal.findById({_id:req.params.id})
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const Add=async(req, res)=>{
  await  Animal.create(req.body)
    .then((data)=>{res.send(data)})
    .catch((err)=>res.send({message: "err"}))
};
const Update=async(req, res)=>{
  await  Animal.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(Animal.findOne({_id:req.params.id}).then((data)=>{res.send(data)}))
    .catch((err)=>res.status(404).send({message: "err"}))
 };
const Delete=async(req, res)=>{
   await Animal.findByIdAndRemove({_id:req.params.id} )
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
module.exports ={Get,GetById,Update,Add,Delete};