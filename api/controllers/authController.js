const router = require('express').Router();

router.post('/register', (req,res) => {
    console.log(JSON.stringify(req.body));
    
    res.json({msg: 'HI'})
})

module.exports = router;