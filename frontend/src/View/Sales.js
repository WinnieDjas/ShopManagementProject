import React,{useEffect} from "react";
import TableShop from "../Component/TableShop"
import { useDispatch, useSelector } from "react-redux";
import { getAllSalesAction} from "../redux/sales/actions"
const tableData=[
    {title:"Quantity",name:"quantity"},
    {title:"Price",name:"price"},
    {title:"Customer",name:"customer"},
    {title:"Status",name:"isActive"},
];
const ViewComponent = (props)=>{
    const dispatch=useDispatch();
    const {Sales, isFetching}= useSelector((state) =>state.Sales);
    useEffect(() =>{
        getAllSalesAction()(dispatch);
    },[]);
    return(
        <>
        <h1>  Sales View</h1>
        <TableShop tableData={tableData} items={Sales}/>
        </>
    )
}

export default ViewComponent