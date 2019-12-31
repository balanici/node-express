const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.status(200);
  res.render('add', {
    title: 'Добавить',
    isAdd: true
  });
});

module.exports = router;