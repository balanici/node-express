const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.status(200);
  res.render('courses', {
    title: 'Курсы',
    isCourses: true
  });
});

module.exports = router;