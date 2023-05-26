// referring to Activity 28 -> routes -> api -> index.js
const router = require('express').Router();
const thoughtRoutes = ('./thoughtRoutes');
const userRoutes = ('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;