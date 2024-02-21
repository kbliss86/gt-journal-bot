//Import the Router
const router = require('express').Router();
//Routes
const tempRoutes = require('./temps.js');
// const lookupHCPRoutes = require('./lookupHCP');
// const clientRoutes = require('./client');
// const lookupClientRoutes = require('./lookupClient');
// const userRoutes = require('./user');

//Router
router.use('/temps', tempRoutes);
// router.use('/lookupHCP', lookupHCPRoutes);
// router.use('/client', clientRoutes);
// router.use('/lookupClient', lookupClientRoutes);
// router.use('/user', userRoutes);

module.exports = router;
