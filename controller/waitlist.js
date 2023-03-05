const waitlist = require('../models/waitlist')

exports.waitlistHome = (req,res)=>{
    res.render('index')
}

exports.registerCustomer = (req,res)=>{
    console.log(req.body.email)
    const data = {
        email: req.body.email
    }
    waitlist.create(data).then((response)=>{
        res.redirect('/')
    }).catch(error=>{
        console.log(error)
    })
}