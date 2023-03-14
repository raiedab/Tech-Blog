const router = require('express').Router();
const sequelize = require('../../config/connection');
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    try {
        const newBlogPost = await res.json(newBlogPost);
    }
    catch (err) {
        res.status(400).json(err)
    };
});

router.delete('/:id', withAuth, async (req, res) => {
    BlogPost.destroy({ where: { id: req.params.id } })
    try {
        const deletedBlogPost = await res.json(deletedBlogPost);
    }
    catch (err) {
        res.status(400).json(err)
    };
});

module.exports = router;