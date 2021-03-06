
import { request, response } from "express";
import Post from "../schema/post-schema.js";


export const createPost=async(request, response)=>{
//console.log(request.body);
try{
const post = await new Post(request.body);
post.save();  //save function to save data in mongodb
response.status(200).json('blog saved succesfully');
}catch(error){response.status(500).json(error);

}
}

export const getAllposts=async(request, response)=>{
    try{
        let posts = await Post.find({});
        response.status(200).json(posts);
      
    }catch(error){
      response.status(500).json(error);
    }
}

export const getPost=async(request,response)=>{
  try{
  let post= await Post.findById(request.params.id);
  response.status(200).json(post);

  }catch(error){
    response.status(500).json(error);
  }
}