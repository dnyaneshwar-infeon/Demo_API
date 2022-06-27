
const { result } = require('lodash');
const product=require('../models/product');

const table=function(req , res)
{
    product.sync();
    res.json({message:"Table Created"});
}

const insert=function(req , res)
{
    product.create({
        product_name:req.query.product_name,
        product_type:req.query.product_type,
        product_cost:req.query.product_cost,
    }).then((result)=>{
        return res.json({message:"Record Inserted Successfully"});
    }).catch((error)=>{
        console.log(error);
        return res.json({message:"Unable to create record"});
    });
}

const displayAll=function(req , res)
{
    product.findAll({
        attributes:["product_id", "product_name" , "product_type" , "product_cost"],
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        console.log(error);
    });
}

const displayById=function(req , res)
{
    product.findOne({
        attributes:["product_id" , "product_name" , "product_type" , "product_cost"],
        where:{
                    product_id:1,
        },
    }).then((result)=>
    {
        res.json(result);
    }).catch((error)=>{
        console.log(error);
    });
}

const update=function(req , res)
{
    product.update(
        {
            product_name:req.query.product_name,
        },
        {
            where:{
                    product_id:req.query.product_id,
            },
        }
    ).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        console.log(error);
    });
}

module.exports.insert=insert;
module.exports.table=table;
module.exports.displayAll=displayAll;
module.exports.displayById=displayById;
module.exports.update=update;