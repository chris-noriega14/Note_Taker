const fs = require('fs');
let dbFile = require("../db/db.json");
const router = require("express").Router();

router.get('/notes',(req,res) => {
    dbFile = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
    res.json(dbFile);
})

router.post('/notes',(req,res) => {

    let noteModel = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
        //Note: Put the random id here.
    }

    dbFile.push(noteModel);

    fs.writeFileSync("./db/db.json",JSON.stringify(dbFile));
    //Converts back to object
    res.json(dbFile);
})

// router.delete('/notes/:id',(req,res) => {
//     // fs.writeFileSync("./db/db.json",JSON.stringify(dbFile));
//     // //Converts back to object
//     // res.json(dbFile);
// })

module.exports = router;