const router = require('express').Router();

router.use('/sign', require('./sign'));
router.use('location', require('./location'));
router.use(require('./error'));

module.exports = router;