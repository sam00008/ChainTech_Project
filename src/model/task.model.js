import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema({
   title : {
    type : String,
    required : true,
    trim : true
   },

   description : {
    type : String,
   },

   isCompleted : {
    type : Boolean,
    default : false,
   },

   category : {
    type : String,
    required : true,
   },
},
 {
    timestamps  :true
 }
);

taskSchema.index({category : 1});
taskSchema.index({isCompleted : 1 });

const Task = new mongoose.model("Task",taskSchema);

export { Task };