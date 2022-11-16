import { SalesActions } from "./index";
import { getAllSalesService } from "./services";

export const getAllSalesAction = () => async (dispatch) => {
    dispatch(SalesActions.setIsFetching(true));
    try {
        const res = await getAllSalesService();
        if(res?.status===200){
            dispatch(SalesActions.setIsFetching(false));
            dispatch(SalesActions.setSales(res.data));
        }
        dispatch(SalesActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};