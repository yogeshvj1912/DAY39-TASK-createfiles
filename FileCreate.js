const fs = require("fs")
// const path=require("path")
const FilesRouter = require("express").Router();


const timestamp = Date.now();
 
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();
const hour=dateObject.getHours();
const minutes=dateObject.getMinutes();
const seconds=dateObject.getSeconds();

FilesRouter.post("/createFile",function(req,res,next){
// prints date & time in YYYY-MM-DD format
const datetime=`${year}-${month}-${date}-${hour}-${minutes}-${seconds}`
try{
    fs.writeFile(`${datetime}.txt`,"hllo",function(err){
        console.log('success')
    });
}catch (error){
return res.status(501).join({
    message:"Error creating file!!!",
});
}

})

module.exports=FilesRouter;