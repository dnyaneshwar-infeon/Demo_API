const { Module } = require('module');
const { Sequelize , DataTypes , Models, Model }= require('sequelize');

const sequelize=require('../util/Connection');

class product extends Model{}

product.init(
    {
        product_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        product_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        product_type:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        product_cost:{
            type:DataTypes.DOUBLE,
            allowNull:false,
        },
    },
        {
            sequelize,
            modelName:"products",
        }
);
module.exports=product;