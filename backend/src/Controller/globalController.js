import status from "http-status"
import Response from "../utils/Response"

export const create= (Model) => async (req,res, next) =>{
    try{
         const data= await Model.create(req.body);
         if(!data){
            return Response.errorMessage (
                res,"failed to register", status.BAD_REQUEST
            );  
         }
         return Response.succesMessage(res, "Succes", data, status.CREATED);
    }catch(error){
        console.log(error);
    }
};

export const getAll= (Model) => async (req,res, next) =>{
    try{
         const data= await Model.find() .select("-password");
         if(!data){
            return Response.errorMessage (
                res,"failed to get", status.BAD_REQUEST
            );  
         }
         return Response.succesMessage(res, "Succes", data, status.OK);
    }catch(error){
        console.log(error);
    }
};
export const getOneById= (Model) => async (req,res, next) =>{
    try{
         const data= await Model.findById(req.params.id).select("-password");
         if(!data){
            return Response.errorMessage (
                res,"failed to get", status.BAD_REQUEST
            );  
         }
         return Response.succesMessage(res, "Succes", data, status.OK);
    }catch(error){
        console.log(error);
    }
};
export const updateOneById= (Model) => async (req,res, next) =>{
    try{
         const data= await Model.findByIdAndUpdate(req.params.id,req.body,{new:true}).select("-password");
         if(!data){
            return Response.errorMessage (
                res,"failed to update", status.BAD_REQUEST
            );  
         }
         return Response.succesMessage(res, "Successfully updated", data, status.OK);
    }catch(error){
        console.log(error);
    }
};
export const deleteOneById= (Model) => async (req,res, next) =>{
    try{
         const data= await Model.findByIdAndDelete (req.params.id).select("-password");
         if(!data){
            return Response.errorMessage (
                res,"failed to delete", status.BAD_REQUEST
            );  
         }
         return Response.succesMessage(res, "Successfully deleted", data, status.OK);
    }catch(error){
        console.log(error);
    }
};