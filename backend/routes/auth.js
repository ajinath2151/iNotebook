const express = require('express');
const User = require('../models/User');
const router = express.Router();


// create a use ruing : POST "/api/auth"  , dosen't require for auth
router.post('/', (request, response)=>{    
    console.log(request.body);    
    // response.send("hello")
    // create new users
    const user = User(request.body)
    user.save();
    response.send(request.body)    
})

module.exports = router