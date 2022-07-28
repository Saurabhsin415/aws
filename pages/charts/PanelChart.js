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
    fontSize:16,
    padding:'12px 0px',
    fontWeight:600,
    textTransform:'uppercase',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize:10,
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
    <h3 style={{'marginBottom':'0px','textTransform':'capitalize'}}>{name && name.replaceAll('-',' ')}</h3>
 </div>
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Date</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Mon</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Tue</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Wed</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Thu</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Fri</StyledTableCell>
            {week==5?'':<StyledTableCell align="center" colSpan={3}>Sat</StyledTableCell>}
            {week==6 || week==5?'':<StyledTableCell align="center" colSpan={3}>Sun</StyledTableCell>}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.fromdate} <br></br> to  <br></br>  {row.todate}
              </StyledTableCell>
 
              <StyledTableCell align="center">{row.mon1[0]}<br></br>{row.mon1[1]}<br></br>{row.mon1[2]}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.mon2}</StyledTableCell>
              <StyledTableCell align="center">{row.mon3[0]}<br></br>{row.mon3[1]}<br></br>{row.mon3[2]}</StyledTableCell>


              <StyledTableCell align="center">{row.tue1?row.tue1[0]:''}<br></br>{row.tue1?row.tue1[1]:''}<br></br>{row.tue1?row.tue1[2]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.tue2}</StyledTableCell>
              <StyledTableCell align="center">{row.tue3?row.tue3[0]:''}<br></br>{row.tue3?row.tue3[1]:''}<br></br>{row.tue3?row.tue3[2]:''}</StyledTableCell>


              <StyledTableCell align="center">{row.wed1?row.wed1[0]:''}<br></br>{row.wed1?row.wed1[1]:''}<br></br>{row.wed1?row.wed1[1]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.wed2}</StyledTableCell>
              <StyledTableCell align="center">{row.wed3?row.wed3[0]:''}<br></br>{row.wed3?row.wed3[1]:''}<br></br>{row.wed3?row.wed3[1]:''}</StyledTableCell>

              
              <StyledTableCell align="center">{row.thu1?row.thu1[0]:''}<br></br>{row.thu1?row.thu1[1]:''}<br></br>{row.thu1?row.thu1[1]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.thu2}</StyledTableCell>
              <StyledTableCell align="center">{row.thu3?row.thu3[0]:''}<br></br>{row.thu3?row.thu3[1]:''}<br></br>{row.thu3?row.thu3[1]:''}</StyledTableCell>

              <StyledTableCell align="center">{row.fri1?row.fri1[0]:''}<br></br>{row.fri1?row.fri1[1]:''}<br></br>{row.fri1?row.fri1[1]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.fri2}</StyledTableCell>
              <StyledTableCell align="center">{row.fri3?row.fri3[0]:''}<br></br>{row.fri3?row.fri3[1]:''}<br></br>{row.fri3?row.fri3[1]:''}</StyledTableCell>


              <StyledTableCell align="center">{row.sat1?row.sat1[0]:''}<br></br>{row.sat1?row.sat1[1]:''}<br></br>{row.sat1?row.sat1[1]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.sat2}</StyledTableCell>
              <StyledTableCell align="center">{row.sat3?row.sat3[0]:''}<br></br>{row.sat3?row.sat3[1]:''}<br></br>{row.sat3?row.sat3[1]:''}</StyledTableCell>

             <StyledTableCell align="center">{row.sun1?row.sun1[0]:''}<br></br>{row.sun1?row.sun1[1]:''}<br></br>{row.sun1?row.sun1[1]:''}</StyledTableCell>
              <StyledTableCell align="center" className='jodi_number'>{row.sun2}</StyledTableCell>
              <StyledTableCell align="center">{row.sun3?row.sun3[0]:''}<br></br>{row.sun3?row.sun3[1]:''}<br></br>{row.sun3?row.sun3[1]:''}</StyledTableCell>
        
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
