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
    
    const IronBlog1 = IronBlogData.map((IronBlog) => IronBlog.get({ plain: true }));
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

// ?is this path correct?
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

    // create a single post for post handlebars
    const blogs = IronBlogData.get({ plain: true });
    res.render('post', {
      ...blogs,
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
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: IronBlog }],
    });

    const user = userData.get({ plain: true });

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

module.exports = router;
