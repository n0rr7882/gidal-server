const router = require('express').Router();

router.use((req, res, next) => {
    const err = new Error('NOT_FOUND');
    err.status = 404;
    next(err);
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        message: err.message
    });
});

module.exports = router;