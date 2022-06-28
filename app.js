const express=require('express');

const app=express();
const con=require('./util/Connection');
const table=require('./Controller/all');
const insert=require('./Controller/all');
const displayAll=require('./Controller/all');
const displayById=require('./Controller/all');
const update=require('./Controller/all');
const del=require('./Controller/all');
const custTable=require('./Controller/all');


const initApp=async()=>
{
    console.log("Testing Database Connection");
    try{
        await con.authenticate();
        console.log("database conneciotn created");
        
        
    }catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
}
initApp();
app.get('/createTable' , table.table);
app.post('/insert' , insert.insert);
app.get('/displayAll' , displayAll.displayAll);
app.get('/displayById' , displayById.displayById);
app.get('/update' , update.update);
app.get('/del' , del.del);
app.get('/createcustTable' , custTable.custTable);
        
app.listen(8000 , ()=>{console.log('Listening on Port 8000')});

