import React, { useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Paper, Textfield, stack, Typography, Button, TextField } from "@mui/material";
import { createProductAction } from "../../redux/product/actions";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack } from "@mui/system";

const Component = (props) =>{
    const dispatch = useDispatch();
    const [unity, setUnity] = useState();
    const [names, setNames] = useState();
    const [description, setDescription] = useState();
    const { token, isFetching }= useSelector ((state) => state?.auth);
    return(
        <Paper sx={{width: "50%", padding: "5rem"}}>
        <Stack direction="column" spacing={3}>
            <Typography div="h1"> Create Product Number</Typography>
            <TextField
             fullWidth
             id="outlined-basic"
             label="names"
             variant="outlined"
             onChange={(e) => setNames(e.target.value)}
             />
             <TextField
             fullWidth
             id="outlined-basic"
             label="Unity"
             variant="outlined"
             onChange={(e) => setUnity(e.target.value)}
             />
             <TextField
             fullWidth
             id="outlined-basic"
             label="Description"
             variant="outlined"
             onChange={(e) => setDescription(e.target.value)}
             />
             <LoadingButton
               loading={isFetching}
               fullWidth
               variant="contained"
               onClick={() => {
               console.log({ names, unity, description });
               createProductAction({ names, unity, description })(dispatch);
               props.setOpen(false);
              }}
             >
              Save
             </LoadingButton>
        </Stack>
        </Paper>
    );
};
export default Component;