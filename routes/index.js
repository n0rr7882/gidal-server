const router = require('express').Router();

router.use('/sign', require('./sign'));
router.use(require('./error'));

module.exports = router;