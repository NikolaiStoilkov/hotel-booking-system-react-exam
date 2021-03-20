const router = require('express').Router();


router.post('/:id/booking', (req,res) => {
    console.log(req.params.id);
    console.log(req.params);
    console.log(req.body);
})

module.exports = router;