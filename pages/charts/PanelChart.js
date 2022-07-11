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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function CustomizedTables({name,data}) {
  return (
<>
    <div className="text-center py-3 text-family1 result-update" style={{'marginTop':'60px'}}>
<h3 style={{'marginBottom':'0px'}}>{name}</h3>
 </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Date</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Mon</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Tue</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Wed</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Thu</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Fri</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Sat</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Sun</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.fromdate} <br></br> to   <br></br>  {row.todate}
              </StyledTableCell>
              <StyledTableCell align="center">{row.mon1}</StyledTableCell>
              <StyledTableCell align="center">{row.mon2}</StyledTableCell>
              <StyledTableCell align="center">{row.mon3}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
