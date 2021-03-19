const router = require('express').Router();


router.post('/:id/booking', (req,res) => {
    console.log(req.params.id);
})

module.exports = router;