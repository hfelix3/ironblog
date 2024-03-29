const router = require('express').Router();
const { IronBlog, User } = require('../models');
const withAuth = require('../utils/auth');

// GET HOME PAGE user
router.get('/', async (req, res) => {
  try {
    const IronBlogData = await IronBlog.findAll({
      include: [
        {
          model: User,
          // ?how many attributes should I include?
          attributes: ['username'],
        },
      ],
    });

    const IronBlog1 = IronBlogData.map((IronBlog) =>
      IronBlog.get({ plain: true })
    );
    res.render('homepage', {
      title: 'IronBlog',
      IronBlog1,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/IronBlog/:id', async (req, res) => {
  try {
    const IronBlogData = await IronBlog.findByPk(req, params.id, {
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });

    const blog = await IronBlogData.get(blogId, { plain: true });

    res.render('post', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET DASHBOARD
// not saving credentials to session
// use post find all and there use the where clause then req.session.user_id then pass in posts then const user = userData.get({ plain: true }); pass posts but not user.
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        id: req.session.user_id,
      },
    });

    console.log(userData);
    const user = userData.map((user) => user.get({ plain: true }));
    // const user = userData.get({ plain: true });

    res.render('dashboard', {
      title: 'Dashboard',
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// LOGIN ROUTE do I need this one here?
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// sign up ROUTE
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});


// RENDER NEWPOST.HANDLEBARS ROUTE
router.get('/newPost', withAuth, async (req, res) => {
  try {
    const renderPost = await User.findAll({
      where: {
        id: req.session.user_id,
      },
    });

    console.log(renderPost);
    const user = renderPost.map((user) => user.get({ plain: true }));

    res.render('post', {
      title: 'New Post',
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// RENDER EDITPOST.HANDLEBARS ROUTE
router.get('/editPost', withAuth, async (req, res) => {
  try {
    const renderEditPost = await User.findAll({
      where: {
        id: req.session.user_id,
      },
    });

    console.log(renderEditPost);
    const user = renderEditPost.map((user) => user.get({ plain: true }));

    res.render('editPost', {
      title: 'Edit Post',
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
