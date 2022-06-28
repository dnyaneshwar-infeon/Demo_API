
const { Sequelize , DataTypes , Model} = require('sequelize');

const sequelize=require('../util/Connection');

class customer extends Model{}

customer.init(
    {
        customer_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        customer_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        customer_city:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        customer_email:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    },
    {
        sequelize,
        modelName:"customer",
    }
);

module.exports=customer;