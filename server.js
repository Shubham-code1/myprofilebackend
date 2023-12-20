const express = require("express");
const dotenv = require('dotenv');
dotenv.config({path:('./config.env')});

const app = express();
const cors = require('cors');


app.use(cors());
const myConnection = require('./connection');
app.use(express.json());
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection",function(socket){
  console.log("user connected" + socket.id)


  socket.on("message",(data)=>{
    console.log(data)
  })

  io.emit("message","Hello how are you?")
})

















http.listen(4000, () => {
  console.log(`Server running on port `,4000);
  // socketIO.on("connection",function(socket){
  //   console.log("user connected" + socket.id)
  // })

  io.on("connection",function(socket){
    console.log("user connected" + socket.id)
  
  
    socket.on("message",(data)=>{
      console.log(data)
    })
  
    io.emit("message","Hello how are you?")
  })
  
  
});

