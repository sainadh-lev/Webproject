import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Name,RollNo,PhoneNumber,Batch) {
  return {Name,RollNo,PhoneNumber,Batch};
}
const rows = [
  createData("Sainadh Jammigumpala", "B190347CS","868842903",'B'),
  createData("Shaik Rabnawaz", "B190347CS","868842903",'A'),
  createData("Sanath Pagala", "B190347CS","868842903",'B'),
  createData("Gopinath", "B190347CS","868842903",'B'),
];

export default function Contacts() {
  return (
    <TableContainer component={Paper} sx={{width:'90%', margin: 'auto',marginTop: '5%'}}>
      <Table sx={{ minWidth: 650,textAlign: 'center' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#54BAB9' }}>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>Name</TableCell>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>RollNo</TableCell>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>PhoneNumber</TableCell>
            <TableCell sx={{fontWeight: 'bold',color: 'white'}}>Batch</TableCell>
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
              <TableCell>{row.RollNo}</TableCell>
              <TableCell>{row.PhoneNumber}</TableCell>
              <TableCell>{row.Batch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
