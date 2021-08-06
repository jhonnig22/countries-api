const { Router } = require('express');
const countriesRouter = Router();
const {Country,Activity} =require('../db');
const { Op } = require("sequelize");

countriesRouter.get('/countries', async function(req,res){
     let {name}=req.query;
     if(name){
        let countries = await Country.findAll({
            where:{
                Name:{[Op.iLike]:`%${name}%`}
            },
           
        });
        if(countries.length===0){
            res.status(404).send({message:'No Se Encontro Coincidencia'})
        }else{
            res.send(countries);
        }
         
     }
     else{
         
        let countries = await Country.findAll();
        res.send(countries);
     }
    

});

countriesRouter.get('/countries/:id', async function(req,res){
   let{id}=req.params;
   if(id){
       let countries = await Country.findByPk(id,{
       
        include:Activity
    });
    if(countries.length===0){
        res.status(404).json({message:'No Se Encontro Coincidencia'});
    }
    else{
         let countries_activity = 
                 {
                    Id:countries.Id,
                    Name:countries.Name,
                    Img:countries.Img,
                    Region:countries.Region,
                    Capital:countries.Capital,
                    Subregion:countries.Subregion,
                    Area:countries.Area,
                    Population:countries.Population,
                    Activities: countries.Activities.map(elem=>{
                        return{ id:elem.id,
                                Name:elem.Name,
                                Difficulty:elem.Difficulty,
                                Duration:elem.Duration,
                                Season:elem.Season}
                    })
             }
       
         res.send(countries_activity);
    }
   

   }
    
});




module.exports = countriesRouter;