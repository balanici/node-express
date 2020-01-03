const {Router} = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', async (req, res) => {
  const courses = await Course.getAll();
  res.status(200);
  res.render('courses', {
    title: 'Курсы',
    isCourses: true,
    courses
  });
});

module.exports = router;