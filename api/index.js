const express = require('express');
const router = express.Router();

router.get('/message', (req, res, next) => {
  res.json({
    YourSessionId: req.session.id
  });
});

module.exports = router;