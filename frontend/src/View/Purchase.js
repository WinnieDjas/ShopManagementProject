import React,{ useEffect}from "react";
import TableShop from "../Component/TableShop"
import { useDispatch, useSelector } from "react-redux";
import { getAllPurchaseAction} from "../redux/purchase/actions"
const tableData=[
    {title:"Quantity",name:"quantity"},
    {title:"Price",name:"price"},
    {title:"Customer",name:"customer"},
    {title:"Status",name:"isActive"},
];
const ViewComponent = (props)=>{
    const dispatch=useDispatch();
    const {purchases, isFetching}= useSelector((state) =>state.purchase);
    useEffect(() =>{
        getAllPurchaseAction()(dispatch);
    },[]);
    return(<>
        <h1>  Purchase View</h1>
        <TableShop tableData={tableData} items={purchases}/>
        </>
    )
}

export default ViewComponent;