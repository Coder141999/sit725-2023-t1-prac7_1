let collection = require('../models/cat');
const catPost = (req, res)=> {
    let cat = req.body;
    collection.catPost(cat, (err, result)=>{
        if(!err){
          res.json({statusCode:201, data:result, message:'success'});
        }
        else {
          res.json({ statusCode: 500, message: 'Internal server error' });
        }
    });
}
function catDel(req,res){
  const id_cat = req.params.id;
  collection.catDel(id_cat, (err, result)=>{
    if(!err){
      res.json({statusCode:200, data:result, message:'delete success'});
    }
    else{
      res.json({ statusCode: 500, message: 'Internal server error' });
    }
  })
}
const getAllCats = (req, res)=> {
    collection.getAllCats((err, result)=> {
        if(!err){
          res.json({statusCode:200, data:result, message:'get all cats success'});
        }
        else {
          res.json({ statusCode: 500, message: 'Internal server error' });
        }
      });
}
module.exports = {catPost, getAllCats, catDel}