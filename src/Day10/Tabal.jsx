import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('vicky', 365, 164.78, 494, 4.9),
];

export default function BasicTable() {


  
  const[count,setcount] = useState(0)

  function heandalincrement(){
      setcount(count+1)
     
  }
  function heandaldecrement(){
      if (count>0){
setcount(count-1)
      }
     
  }
  return (
   <>
    <div style={{
      width:"95%",
      height:"auto",
      backgroundColor:"yellow",
      margin:"auto",
      
    }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>


    <div className='w-11/12 h-auto m-auto  flex'>
            <div className=" bg-emerald-100 p-3 mt-5 m-auto rounded-lg">
                <h1>counter App</h1>
                {count===10 ? <p>yahooo</p>:  <></> }
                <button onClick={heandalincrement} className='ml-5 text-5xl text-pink-600'>+</button> 
                <h2  className='ml-5 text-3xl '>{count} </h2>
                <button onClick={heandaldecrement}  className='ml-5 text-5xl text-pink-600'>-</button>
            </div>
        </div>
   </>
   
    );
}
