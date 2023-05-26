// referring to Activity 28 -> routes -> api -> courseRoutes.js
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser, addFriend)
    .delete(deleteUser, removeFriend);

module.exports = router;