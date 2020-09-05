//@desc    logger middlw ware logs req to console
const logger = (req, res, next) => {

    console.log(`\nLogger info ${req.method}\n`);
    next();
}

module.exports = logger;