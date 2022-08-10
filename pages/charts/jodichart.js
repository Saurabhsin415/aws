import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Head from 'next/head'
import {Helmet} from "react-helmet";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e70280;',
    color: theme.palette.common.white,
    fontSize:18,
    padding:'00px 0px',
    fontWeight:500,
    border:'1px solid #030303!important',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 22,
    fontWeight:700,
    padding:'02px 2px',
    fontFamily:'normal',
    border:'1px solid #030303!important',
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
<Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="text-center py-3 text-family1 result-update" style={{'marginTop':'40px'}}>
<h3 style={{'marginBottom':'0px','textTransform':'capitalize'}}>{name && name.replaceAll('-',' ')}</h3>
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
            {week==5?'':
             <StyledTableCell align="center">Sat</StyledTableCell>
            }
             {week==6 || week==5?'':
             <StyledTableCell align="center">Sun</StyledTableCell>
             }
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.result.map((row) => (
            <StyledTableRow key={row.name}>
             
              <StyledTableCell align="center" className={`red-${row.mon2}`}>{row.mon2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.tue2}`}>{row.tue2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.wed2}`}>{row.wed2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.thu2}`}>{row.thu2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.fri2}`}>{row.fri2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.sat2}`}>{row.sat2}</StyledTableCell>
              <StyledTableCell align="center" className={`red-${row.sun2}`}>{row.sun2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}