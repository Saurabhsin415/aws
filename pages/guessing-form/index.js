import React, { useEffect, useState,Component } from "react";
import axios from "../../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast } from "react-toastify";
import 'draft-js/dist/Draft.css';

 
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
export default function GuessingFrom() {
  const [content,setContent]=useState('');
  const notify = () => toast("Wow so easy!");
  const address = 'liveupddate';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  const [value, setValue] =useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    background:'linear-gradient(119deg, #d0e5f9, #b4bfcb);',
    boxShadow: 24,
    borderRadius:'5px',
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const emoji=[
{'src':'https://dpboss.rocks/emoji/congrats.gif','icon':'name'},
{'src':'https://dpboss.rocks/emoji/Thanks.gif','icon':'name'},
{'src':'https://dpboss.rocks/emoji/angry.gif','icon':'name'},
]

const addemoji=(item)=>{
  console.log(item);
  toast("Emoji Added Succefully.")
  {console.log(item.src)}
  let img=content+'ggg'+'<div>  <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/cta-bg-shape.png"  className="img1"/></div>';
  console.log(img);
  setContent(img);
  setOpen(false);
}
  return (
<>


<div className="text-center py-3 text-family1 guessing-forum">
<h3 style={{'marginBottom':'0px'}}>Guessing Forum</h3> 
 {/* <div className='text-color1'>Date:10/07/2022</div> */}
 </div> 
 
 <div className='content-wrap1'>
  <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/cta-bg-shape.png"  className='img1'/>
  {/* <div></div> */}
 
  {/* <div className="text-center text-family text-justify">
  Satta Matka Kalyan Main Mumbai Fastest Results
Get Kalyan Matka Main Mumbai Satta Matka Market Results Fastest Live Update. Get All Kalyan,Main Mumbai,Madhur Matka,Rajdhani,Milan,Madhur Matka And Time Bazar Jodi Penal Panel Patti Panna Charts For Free . All Matka Guessing.With Best Guessers , Online Old Charts , Satta Matka Number Software Links, Online Charts List Pdf Download And Top Matka Guessing Free Number Provided By Sattamatka143 Professor And Master Dr Admin Sir.
Other Special Features Include 220 Patti Satta Weekly Matka Jodi Chart With Direct Access To Guessing Form Of Experts Tricks Access Via Website

</div> */}
</div>
 
      <CssBaseline />
      <Container maxWidth="lg" className="content-wrap1 py-20 text-center">
      <Button onClick={handleOpen} className="emoji_img">Add Emoji</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
  
          </Typography>
          <div className="">
            {emoji && emoji.map((item,index)=>{
 return(
<img className="emoji_img" src={item.src} alt="df"  onClick={() => addemoji(item)}/> 
            )
            })}
          </div>
        </Box>
      </Modal>
      {console.log(value)} 
      {console.log('asdf')} 
      {/* <TextField
          id="outlined-multiline-static fullWidth"
          value={value}
          onChange={handleChange}
          multiline
          rows={4}
          defaultValue={value}
          fullWidth label="COMMENTS"
          className="text-center"
        /> */}
        

        <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                          console.log(editor);
                        // this.editor = editor;
                    } }
                    onError={ ( error, { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) =>
					{	const data = editor.getData();
			         	setContent(data);
					 
					}
					  }
                    editor={ DecoupledEditor }
                    data={content}
		 
                />
					
            </div>
   
<div className="text-center">   <a href="#" className="btn button">Submit</a></div>
      </Container>
 
{/* <div className="container">
    <div className="content-wrap1">
        <textarea rows={10} className="form-control"></textarea>
    </div>
</div> */}
 {/* {!data? <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>:data &&
          data.data.map((item,index) => (
            <div className='content-wrap1 text-center result-div text-family2' key={index}>
<h2 className='text-color2'>{item.chartname}</h2>
<p className=''>{item && item.number && item.number.left_patti}-{item && item.number && item.number.jodi}-{item && item.number && item.number.right_patti}</p>
<p className='time text-family'>{item && item.open && item.open} to {item && item.close && item.close}</p>
 </div>
          ))} */}

 
</>
 
  );
}