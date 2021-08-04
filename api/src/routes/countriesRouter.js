const { Router } = require('express');
const countriesRouter = Router();
const {Country} =require('../db');
const { Op } = require("sequelize");

countriesRouter.get('/countries', async function(req,res){
     let {name}=req.query;
     if(name){
        let countries = await Country.findAll({
            where:{
                Name:{[Op.iLike]:`%${name}%`}
            }
        });
        if(countries.length===0){
            res.status(404).send("No Se Encontro Coincidencia")
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
       let countries = await Country.findAll({
        where:{
            Id:req.params.id
        }
    });
    if(countries.length===0){
        res.status(404).json({message:'No Se Encontro Coincidencia prro'});
    }
    else{
         res.send(countries);
    }
   

   }
    
});




module.exports = countriesRouter;