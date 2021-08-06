const { Router } = require('express');
const activityRouter = Router();
const{Activity}=require('../db.js')



activityRouter.get('/activity', async function(req,res){
    Activity.findAll().then(result=>{ //consulta con promesas
        res.status(200).send(result);
    },error=>{
        res.status(400).send({message:error});
    })
});


activityRouter.post('/activity',async function(req,res){
console.log(req.body);
const obj = req.body; // por body tambien me llega un array con las ID de los paices al cual hacer relacion
if(Object.entries(obj).length===0){
    res.status(404).send({message:'Data Invalid'});
}
else{
   let elem= await Activity.create({
        Name:obj.Name,
        Difficulty:obj.Difficulty,
        Duration:obj.Duration,
        Season:obj.Season
    });
    elem.addCountries(obj.countris);
    console.log(obj.countris);
    res.send(elem);
}

});

module.exports=activityRouter;