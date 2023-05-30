import express from "express";
import axios from "axios";
const route = express.Router()

route.get("/", (req, res) => {
    res.status(200).json({ "message": "welcome I am in cloud" });
  });

route.get("/post", async (req, res) => {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const responseJson = response.data.slice(0,12) 
      res.status(200).json({responseJson});
    } catch (error) {
      res.status(400).json({ "message": "Something went wrong", error });
    }
  });

route.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
    const {data} = response
    res.status(200).json({data});

  } catch (error) {
    res.status(400).json({ "message": "Something went wrong", error });
  }
});

  
  
  
  

  

export {route}