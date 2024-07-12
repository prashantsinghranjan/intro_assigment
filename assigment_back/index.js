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

 //Here we are calling for all the requied data
app.get("/",async(req,res)=>{
  let currentTime=new Date()
  try{
    let data=await TRecord.find({Date:{$gte:moment(currentTime).subtract(3,'months').toDate(),$lte:currentTime}}) 
    res.status(200).json({message:"SUCCESS",data:JSON.parse(JSON.stringify(data))})
  }catch(err) {
  res.status(500).json(err)     // Failure 
};
   
   
})
//we can save the data for test
app.post("/save",(req,res)=>{
  //data is the collection of data on which we can test transactio
  let data= [
    {
        name: "customer1",
        Items: [
            "item1",
            "item3"
        ],
        Total_price: 140,
        Date:new Date("2024-06-04T09:42:45.340Z") ,
        Reward: 130
    },
    {
        name: "customer1",
        Items: [
            "item1",
            "item3"
        ],
        Total_price: 140,
        Reward: 130,
        Date: new Date("2024-06-04T09:42:45.340Z")
    },
    {
        name: "customer2",
        Items: [
            "item4"
        ],
        Total_price: 80,
        Reward: 50,
        Date: new Date("2024-04-14T09:42:45.340Z")
    },
    {
        name: "customer3",
        Items: [
            "item3",
            "item5"
        ],
        Total_price: 180,
        Reward: 210,
        Date: new Date("2024-06-16T09:42:45.340Z")
    },
    {
        name: "customer2",
        Items: [
            "item1",
            "item2"
        ],
        Total_price: 70,
        Reward: 50,
        Date: new Date("2024-07-04T09:42:45.340Z") 
    },
    {
        name: "customer1",
        Items: [
            "item1",
            "item3"
        ],
        Total_price: 140,
        Reward: 130,
        Date:new Date("2024-07-04T09:42:45.340Z") 
    },
    {
        name: "customer3",
        Items: [
            "item3",
            "item5"
        ],
        Total_price: 180,
        Reward: 210,
        Date: new Date("2024-07-04T09:42:45.340Z")
    },
    {
        
        name: "customer2",
        Items: [
            "item1",
            "item2"
        ],
        Total_price: 70,
        Reward: 50,
        Date:new Date("2024-06-10T09:42:45.340Z") 
    },
    {
        name: "customer1",
        Items: [
            "item1",
            "item3"
        ],
        Total_price: 140,
        Date: new Date("2024-06-04T09:42:45.340Z"),
        Reward: 130
       
    },
    {
        name: "customer3",
        Items: [
            "item3",
            "item5"
        ],
        Total_price: 180,
        Date:new Date("2024-05-12T09:42:45.340Z"),
        Reward: 210
    },
    {
        name: "customer2",
        Items: [
            "item1",
            "item2"
        ],
        Total_price: 70,
        Date: new Date("2024-06-11T09:42:45.340Z"),
        Reward: 50
    },
    {
        name: "customer1",
        Items: [
            "item1",
            "item3"
        ],
        Total_price: 140,
        Date:new Date("2024-07-11T09:42:45.340Z"),
        Reward: 130
    }
  ]
 data.forEach((element)=>{
  if(element.Total_price>100){
    element.Reward=2*(element.Total_price-100)+1*50
  }else{
    element.Reward=1*50
  }
  
 })
 
 TRecord.insertMany(data).then(function () {
  res.status(200).json({message:"SUCCESS",data:data})// Success 
}).catch(function (error) {
  res.status(500).json(err)     // Failure 
}); 
   
   
})


app.listen(5000,()=>{console.log("successfully connected")})