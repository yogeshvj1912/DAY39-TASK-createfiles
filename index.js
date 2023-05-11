



const express=require("express")
const node_server=express()

const File_server=require("./FileCreate")

const port=4000;


node_server.use("/",File_server);


try{
    node_server.listen(port,'localhost',() => {
        console.log('sever started',port)
    })
}catch(error){
    console.log("ERROR OCCURED",error)
}

 

