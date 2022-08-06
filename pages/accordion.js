import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as API from "./api/app"; 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from "react-toastify";
export default function SimpleAccordion() {
  const { result, error } =API.Faq(); 
  if (error) return toast('Something went wrong!');
 if (!result) return <Box sx={{ display: 'flex' }}>
 <CircularProgress className="m-auto mt-20"/>
</Box>;

  return (
    <div className='accordion'>
    {console.log(result.data)}
    
 {!result? <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>:result &&
    result.data.map((item,index) => (
            <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
 <h1 style={{'fontSize':'16px','margin':'0px'}} >{item.title}</h1> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{'fontSize':'14px'}} className="text-capitalize" dangerouslySetInnerHTML={{__html: item.content}}></div>
           </Typography>
        </AccordionDetails>
      </Accordion>
          ))}



   
 
    </div>
  );
}
