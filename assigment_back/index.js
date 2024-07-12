const express=require("express")
const cors = require('cors');
const TRecord=require("./model/tansactionRecord.model")
const bodyParser=require('body-parser')
const mongoose = require("mongoose");
const moment=require('moment')

const app=express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const mongoURI = 'mongodb://0.0.0.0:27017/transaction';
// // Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));
app.get("/",async(req,res)=>{
  let currentTime=new Date()
  try{
    let data=await TRecord.find({Date:{$gte:moment(currentTime).subtract(3,'months').toDate(),$lte:currentTime}}) 
    res.status(200).json({message:"SUCCESS",data:JSON.parse(JSON.stringify(data))})
  }catch(err) {
  res.status(500).json(err)     // Failure 
};
   
   
})

app.post("/save",(req,res)=>{
  //let registration=req.body
  let data1=[
    {
        name:"customer1",
        Items:["item1","item3"],
        Total_price:140,
        Date:moment().format("MMM Do YY"),
        Reward:0
    
     },
     {
        name:"customer2",
        Items:["item4"],
        Total_price:80,
          Date:moment().format("MMM Do YY"),
        Reward:0
    
     },
     {
        name:"customer3",
        Items:["item3","item5"],
        Total_price:180,
       Date:moment().format("MMM Do YY"),
        Reward:0
    
     },
     {
        name:"customer2",
        Items:["item1","item2"],
        Total_price:70,
         Date:moment().format("MMM Do YY"),
        Reward:0
    
     },
     {
        name:"customer5",
        Items:["item2","item4"],
        Total_price:130,
         Date:moment().format("MMM Do YY"),
        Reward:0
    
     }

 ]
 let data=[{
  name:"customer1",
  Items:["item1","item3"],
  Total_price:140,
  Date:new Date(),
  Reward:0

}]
 data.forEach((element)=>{
  if(element.Total_price>100){
    element.Reward=2*(element.Total_price-100)+1*50
  }else{
    element.Reward=1*50
  }
  
 })
 let date=moment().format("MMM Do YY");
 console.log(date)
 TRecord.insertMany(data).then(function () {
  res.status(200).json({message:"SUCCESS",data:data})// Success 
}).catch(function (error) {
  res.status(500).json(err)     // Failure 
}); 
    //const stud = new TRecord(data);
    // stud.save().then(
    //         (data) => {
    //             res.status(200).json({message:"SUCCESS",data:data})} , 
    //         (err) => {res.status(500).json(err)}
    //     );

   
})


app.listen(5000,()=>{console.log("successfully connected")})