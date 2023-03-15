const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const blogRoutes = require('./api/blog-routes');
const commentRoutes = require('./api/comment-routes');

router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
