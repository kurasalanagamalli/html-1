const empcon=require('../control/emp control')
const express=require('express')
const routes=express.Router()
routes.post('/add-emp',empcon.insertEmp)
Router.got('/get-emps',empcon.findEmps)

