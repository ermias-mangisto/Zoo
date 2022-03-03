const Employee=require('../Models/EmployeeModel')
const Get= async(req, res)=>{
  await Employee.find()
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(404).send({message: "err"}))
    
};
const GetById=async(req, res)=>{
   await Employee.findById({_id:req.params.id})
    .then((data)=>{ res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
const Add=async(req, res)=>{
  await  Employee.create(req.body)
    .then((data)=>{res.send(data)})
    .catch((err)=>res.send({message: "err"}))
};
const Update=async(req, res)=>{
  await  Employee.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(Employee.findOne({_id:req.params.id}).then((data)=>{res.send(data)}))
    .catch((err)=>res.status(404).send({message: "err"}))
 };
const Delete=async(req, res)=>{
   await Employee.findByIdAndRemove({_id:req.params.id} )
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(404).send({message: "err"}))
};
module.exports ={Get,GetById,Update,Add,Delete};