import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e70280;',
    color: theme.palette.common.white,
    fontSize:18,
    padding:'12px 0px',
    fontWeight:600,
    textTransform:'uppercase',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 22,
    fontWeight:600,
    padding:'12px 0px',
    fontFamily:'Kalam',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables({name,data,week}) {
  return (
<>
    <div className="text-center py-3 text-family1 result-update" style={{'marginTop':'60px'}}>
<h3 style={{'marginBottom':'0px','textTransform':'capitalize'}}>{name.replaceAll('-',' ')}</h3>
 </div>
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
       
            <StyledTableCell align="center">Mon</StyledTableCell>
            <StyledTableCell align="center">Tue</StyledTableCell>
            <StyledTableCell align="center">Wed</StyledTableCell>
            <StyledTableCell align="center">Thu</StyledTableCell>
            <StyledTableCell align="center">Fri</StyledTableCell>
            {week==5?'':<StyledTableCell align="center">Sat</StyledTableCell>}
            {week==6 || week==5?'':<StyledTableCell align="center">Sun</StyledTableCell>}
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.map((row) => (
            <StyledTableRow key={row.name}>
             
              <StyledTableCell align="center">{row.mon2}</StyledTableCell>
              <StyledTableCell align="center">{row.tue2}</StyledTableCell>
              <StyledTableCell align="center">{row.wed2}</StyledTableCell>
              <StyledTableCell align="center">{row.thu2}</StyledTableCell>
              <StyledTableCell align="center">{row.fri2}</StyledTableCell>
              <StyledTableCell align="center">{row.sat2}</StyledTableCell>
              <StyledTableCell align="center">{row.sun2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
