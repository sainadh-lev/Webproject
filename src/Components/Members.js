import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(Name, Cvlinks) {
  return { Name, Cvlinks };
}


function openPdfFile() {
    var URL = 'C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf';
    window.open(URL);
}

const rows = [
  createData("Sainadh Jammigumpala", "C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf"),
  createData("Shaik Rabnawaz", "C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf"),
  createData("Sanath Pagala", "C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf"),
  createData("Gopinath", "C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf"),
];

export default function Members() {
  return (
    <TableContainer component={Paper} sx={{ width:'50%', margin: 'auto',marginTop: '50px',marginBottom: "20px",overflow: 'hidden'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#54BAB9' }}>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>Name</TableCell>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>Cvlinks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell><object width="100%" height="200" data="C:/Users/91868/Desktop/Webproject/intialphase/public/SAINADH JAMMIGUMPALA RESUME (1).pdf" type="application/pdf">   </object></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
