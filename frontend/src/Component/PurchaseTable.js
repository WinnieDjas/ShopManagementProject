import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { getAllPurchaseAction } from "../redux/purchase/actions";

export default function BasicTable() {
  const dispatch = useDispatch();
const {purchases,isFetching} = useSelector((state)=>state.purchase)
  useEffect(() => {
    getAllPurchaseAction()(dispatch);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right"> Price</TableCell>
            <TableCell align="right"> Customer</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">
                {row.isActive ? "Is Available" : "Is Not Available"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}