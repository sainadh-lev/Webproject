import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import R1 from "../R1.pdf";
import R2 from "../sanathresume.pdf";
import R3 from "../shaikresume.pdf";
import R4 from "../resume.pdf";
import {Typography} from "@mui/material";

function createData(Name, Cvlinks) {
  return { Name, Cvlinks };
}

const rows = [
  createData("Sainadh Jammigumpala", R1),
  createData("Shaik Rabnawaz", R3),
  createData("Sanath Pagala", R2),
  createData("Gopinath", R4),
];

export default function Members() {
  return (
    <TableContainer component={Paper} sx={{ width:'55%', margin: 'auto',marginTop: '5%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#54BAB9' }}>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}><Typography variant="h5">Name</Typography></TableCell>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}><Typography variant="h5">Cvlinks</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="h5">{row.Name}</Typography>
              </TableCell>
              <TableCell>
                <Button href={row.Cvlinks} target="_blank" variant="outlined">LINK</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
