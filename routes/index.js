const router = require('express').Router();

router.use('/sign', require('./sign'));
router.use('/users', require('./user'));
router.use('/rooms', require('./room'));
router.use('/location', require('./location'));
router.use(require('./error'));

module.exports = router;