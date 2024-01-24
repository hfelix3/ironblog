const router = require('express').Router();
const { Post } = require('../../models');

// New Post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

//EDIT POST
router.put('/:id', async (req, res) => {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  
    return res.json(postData);
  });

// DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletePost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  module.exports = router;