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


function openPdfFile(e) {
    var URL = e.target.value;
    console.log(URL)
    window.open(URL);
}

const rows = [
  createData("Sainadh Jammigumpala", "https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf"),
  createData("Shaik Rabnawaz", "https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf"),
  createData("Sanath Pagala", "https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf"),
  createData("Gopinath", "https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf"),
];

export default function Members() {
  return (
    <TableContainer component={Paper} sx={{ width:'55%', margin: 'auto',marginTop: '5%'}}>
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
              <TableCell>
                <Button value={row.Cvlinks} onClick={openPdfFile}>LINK</Button>
                {/* <object width="100%" height="400" data="https://github.com/sainadh-lev/Webproject/blob/main/public/R1.pdf" type="application/pdf">   </object> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
