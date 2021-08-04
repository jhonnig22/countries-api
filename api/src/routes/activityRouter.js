const { Router } = require('express');
const activityRouter = Router();
const{Activity}=require('../db.js')



activityRouter.post('/activity',async function(req,res){
console.log(req.body);
const obj = req.body;   
if(Object.entries(obj).length===0){
    res.status(404).send('Data invalid');
}
else{
   let elem= await Activity.create({
        Name:obj.Name,
        Difficulty:obj.Difficulty,
        Duration:obj.Duration,
        Season:obj.Season
    })
    console.log(obj.countris);
    res.send(elem);
}

});

module.exports=activityRouter;