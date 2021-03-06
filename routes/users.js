const express = require('express');

const router = express.Router();
const { registration,loginController } = require('../controllers');

router.post('/signup', registration.applyRegistration);

router.post('/verify-email', registration.activateUser);

router.post('/login', loginController.login);

router.get('/check-email', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/recovery', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/backup', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
