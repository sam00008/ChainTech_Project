import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const taskValidation = asyncHandler (async(req,res,next) => {
    const { title, category } = req.body;
    
    if(!title || !category){
        throw new ApiError(
            400,
            "All fields are required"
        );
    }

    if(title.trim().length < 3){
        throw new ApiError(
            400,
            "Title must be at least 3 Characters"
        );
    }

    next();
});

export { taskValidation };