import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as API from "./api/app"; 
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { toast } from "react-toastify";
export default function SimpleAccordion() {
  const { result, error } =API.Faq(); 
  if (error) return toast('Something went wrong!');
 if (!result) return <Skeleton height={200}/>;

  return (
    <> 
       <h3 style={{'marginBottom':'0px'}}>Jodi Chart</h3>
    <div className='accordion'>
    {/* {console.log(result.data)} */}

 {!result? <Skeleton height={200}/>:result &&
    result.data.map((item) => (
            <Accordion key={item.id}>
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
    </>
  );
}
