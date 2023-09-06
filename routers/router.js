let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');
router.get('/api/cats', (req,res) => {
   controller.getAllCats(req, res);
   }
  );
  
  router.post('/api/cat', (req,res)=>{
    controller.catPost(req, res);
  });
  router.delete('/api/cat/:id', (req,res)=>{
    controller.catDel(req, res);
  });
  module.exports = router;