const path = require('path');
const router = require('express').Router();

// 11.3.4 create routes to serve index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//11.3.6 create routes to serve animals.html
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
//11.3.6 create routes to serve zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
  
//wildcard routes - * = wildcard - meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;