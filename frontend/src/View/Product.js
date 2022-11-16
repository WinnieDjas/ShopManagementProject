import React, { useState, useEffect } from "react";
import TableShop from "../Component/TableShop"
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../redux/product/actions";
import { Button,Modal,Stack } from "@mui/material";
import ProductForm from "../Component/Forms/ProductForm";
import DeleteIcon from '@mui/icons-material/Delete';


const tableData=[
    {title:"Product Name",name:"names"},
    {title:"Unity",name:"unity"},
    {title:"Description",name:"description"},
    {title:"Status",name:"isActive"},
];
const ViewComponent = (props)=>{
    const dispatch=useDispatch();
    const [open, setOpen]= useState (false);
    const {products, isFetching}= useSelector((state) =>state.product);
    useEffect(() =>{
        getAllProductAction()(dispatch);
    },[]);
    return(
        <>
        <Modal
        open={open}
        onClose={()=>{
            setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
        >
            <ProductForm setOpen={setOpen}/>
        </Modal>
        <Stack direction="row" alignItems="center" justifyContent="space-around">
        <h1> Product View</h1>
        <Button variant="contained" onClick={() => setOpen(true)}> 
        {" "}
        Create Product 
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
        </Stack>
        <TableShop tableData={tableData} items={products}/>
       
        </>
    );
};

export default ViewComponent;