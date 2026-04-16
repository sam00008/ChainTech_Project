import mongoose from "mongoose";
import { Task } from "../model/task.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse.utils";
import { asyncHandler } from "../utils/asyncHandler.utils";

const addTask = asyncHandler(async (req, res) => {

    const { title, description, category } = req.body;

    const task = await Task.create({
        title: title.trim(),
        description,
        category: category.trim()
    });

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                task,
                "Task created successfully"
            )
        );
});

const getTask = asyncHandler(async(req,res) => {
    const id = req.params.id;
    const { category } = req.query;

     if(category){
        const task = await Task.find({ category });
        
        return res 
         .status(200)
         .json(
            new ApiResponse(
                200,
                task,
                "Task fetched successfullt by category"
            )
         )
     }

     if(id){

        if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(
            400,
            "Invalid Task Id"
        );
    }
    const task = await Task.findById(id);

    if(!task){
        throw new ApiError(
            404,
            "Task not found"
        );
    }

    return res
     .status(200)
     .json(
        new ApiResponse(
            200,
            task,
            "Task fetched successfully by id"
        )
     );
     }

     const task = await Task.find();
     return res
      .status(200)
      .json(
        new ApiResponse(
            200,
            task,
            "All task fetched successfully"
        )
      );
});

const updateTask = asyncHandler(async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);

    if(!task){
        throw new ApiError(
            404,
            "Task not found"
        );
    }
    
    const { title, description, category, isCompleted } = req.body;

    if(title) task.title = title;
    if(description) task.description = description;
    if(category) task.category = category;
    if(isCompleted !== undefined){
        if(task.isCompleted && isCompleted){
            throw new ApiError(
                400,
                "Task already completed"
            );
        }
        task.isCompleted = isCompleted;
    }

    await task.save();
    return res 
     .status(200)
     .json(
        new ApiResponse(
            200,
            task,
            "Task updated successfully"
        )
     );
});

const deleteTask = asyncHandler(async(req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);

    if(!task){
        throw new ApiError(
            404,
            "Task not found"
        );
    }

    await task.deleteOne();
    return res 
     .status(200)
     .json(
        new ApiResponse(
            200,
            {},
            "Task successfully deleted"
        )
     );
});

export { 
    addTask,
    getTask,
    updateTask,
    deleteTask
}