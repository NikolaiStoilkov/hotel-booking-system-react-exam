const router = require('express').Router();

router.post('/auth/register', (req,res) => {
    res.json({msg: 'HI'})
})

module.exports = router;