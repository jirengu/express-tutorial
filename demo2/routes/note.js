var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  req.models.note.find({}, function(err, notes){
    if(err){
      throw new Error
    }
    console.log(notes)
    res.render('list', {notes: notes})
  })
});

router.get('/create', function(req, res, next) {
  res.render('create');
});
router.post('/create', function(req, res, next) {
  console.log(req.body.title, req.body.content)
  req.models.note.create({
    title: req.body.title,
    content: req.body.content
  }, function(err){
    if(err){
      console.log(err)
      throw new Error
    }
    res.send('create success...')
  })
});

router.get('/detail/:id', function(req, res, next) {
  console.log(req.params.id)
  req.models.note.find({id:req.params.id}, function(err, note){
    if(err){
      throw new Error
    }
    console.log(note)
    res.render('detail', {note:note[0]})
  })

});
module.exports = router;
