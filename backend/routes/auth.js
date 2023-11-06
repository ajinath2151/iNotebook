const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    let obj = {
        Name : 'Ajinath Shinde',
        salary:34000,
    }
    res.json(obj);
})

module.exports = router