const express = require('express')
const Employee = require('../models/employee.model')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('home')

})

router.post("/", (req, res) => {
    let emp = new Employee()
    emp.fullName = req.body.fullName
    emp.email = req.body.email
    emp.mobile = req.body.mobile
    emp.city = req.body.city

    emp.save()
        .then(result => {
            res.redirect('/employee')
        })

})


   router.get("/show",(req,res)=>{
    Employee.find()
             .then(result=>{
                res.render('showEmp',{list:result})
             })
   })


   router.get("/:id",(req,res)=>{
    Employee.findById(req.params.id)
            .then (result =>console.log(result))
           

   })

   router.get("/del/:id",(req,res)=>{
      Employee.findByIdAndDelete(req.params.id)
               .then(result=>res.redirect("/employee/show"))
   })

module.exports = router

//localhost:3000/employee/show