const validateUpdateTask = (req, res, next) => {
    const { title, description, category,isCompleted } = req.body;

    if (title === undefined &&
        description === undefined && 
        category === undefined && 
        isCompleted === undefined) {
        return res.status(400).json({
            success: false,
            message: "At least one field is required to update"
        });
    }

    
    if (title && typeof title !== "string") {
        return res.status(400).json({
            message: "Title must be a string"
        });
    }

    if (description && typeof description !== "string") {
        return res.status(400).json({
            message: "Description must be a string"
        });
    }

    if (category && typeof category !== "string") {
        return res.status(400).json({
            message: "Category must be a string"
        });
    }

    next();
};

export { validateUpdateTask };