const router = require('express').Router();
const { Post } = require('../models');

// Route to render the homepage
router.get('/', async (req, res) => {
    try {
        // Fetch posts data from the database, including titles and creation dates
        const postData = await Post.findAll({
            attributes: ['title', 'createdAt'],
        });

        // Serialize data for the template
        const posts = postData.map((post) => post.get({ plain: true }));

        // Render the homepage with posts and navigation options
        res.render('homepage', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
