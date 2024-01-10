const router = require('express').Router();
const { Comment } = require('../../models');

// Get all comments
router.get('/', async (req, res) => {
  try {
    // ?is commentData what goes into the comments.handlebars file?
    const CommentData = await Comment.findAll();
    res.json(CommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one comment
router.get('/:id', async (req, res) => {
  try {
    const CommentData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(CommentData);
  } catch (error) {
    console.error('Error fetching Comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Post comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//update a comment
router.put('/:id', async (req, res) => {
  const CommentData = await Comment.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  });

  return res.json(CommentData);
});

//Delete comment
router.delete('/:id', async (req, res) => {
  try {
    const CommentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CommentData) {
      res.status(404).json({ message: 'No Comment found with this id!' });
      return;
    }

    res.status(200).json(CommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
