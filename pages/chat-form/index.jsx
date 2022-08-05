import dynamic from "next/dynamic";
import React, { useEffect, useState,Component,useRef } from "react";
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
import {ChatFormPost,ChatLike,ChatDislike,UserInfo} from "../api/app"; 
import Login from "./login"; 
import Cookies from 'js-cookie'
import { usePagination } from "../../components/lib/hooks";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 
import Link from 'next/link';
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
export default function Guessingforum() {
//  console.log(token);
const { result, errors } =UserInfo();
const [token,settoken]=useState();
const [value, setValue] =useState('');
const [user,setUser]=useState('');
const [orginal,setOrginal]=useState(0);
const [orgin,setOrgin]=useState(0);
const [search,setSearch]=useState('');
const [quotevalue,setQuoteValue]=useState('');
useEffect(()=>{
      
  if(Cookies.get('auth_token'))
  {
    settoken(Cookies.get('auth_token'));
    setUser(result?result.data:'');
  }
},[result])
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
{'src':  process.env.API_URL2 +'emoji/adore.gif'},
{'src':process.env.API_URL2 +'emoji/aetsch.gif'},
{'src':process.env.API_URL2 +'emoji/angry.gif'},
{'src':process.env.API_URL2 +'emoji/angrywife.gif'},
{'src':process.env.API_URL2 +'emoji/announce.gif'},
{'src':process.env.API_URL2 +'emoji/avatar224.gif'},
{'src':process.env.API_URL2 +'emoji/b0201.gif'},
{'src':process.env.API_URL2 +'emoji/b0225.gif'},
{'src':process.env.API_URL2 +'emoji/balle balle.gif'},
{'src':process.env.API_URL2 +'emoji/banghead.gif'},
{'src':process.env.API_URL2 +'emoji/banned 3.gif'},
{'src':process.env.API_URL2 +'emoji/bath.gif'},
{'src':process.env.API_URL2 +'emoji/bawl.gif'},
{'src':process.env.API_URL2 +'emoji/bebored.gif'},
{'src':process.env.API_URL2 +'emoji/beee.gif'},
{'src':process.env.API_URL2 +'emoji/beer.gif'},
{'src':process.env.API_URL2 +'emoji/bigboss.gif'},
{'src':process.env.API_URL2 +'emoji/biggrin.gif'},
{'src':process.env.API_URL2 +'emoji/biggrinangel.gif'},
{'src':process.env.API_URL2 +'emoji/birthday.gif'},
{'src':process.env.API_URL2 +'emoji/boxing.gif'},
{'src':process.env.API_URL2 +'emoji/brushing.gif'},
{'src':process.env.API_URL2 +'emoji/bsanta.gif'},
{'src':process.env.API_URL2 +'emoji/bye.gif'},
{'src':process.env.API_URL2 +'emoji/call.gif'},
{'src':process.env.API_URL2 +'emoji/chat.gif'},
{'src':process.env.API_URL2 +'emoji/ciao.gif'},
{'src':process.env.API_URL2 +'emoji/confuse.gif'},
{'src':process.env.API_URL2 +'emoji/congrats.gif'},
{'src':process.env.API_URL2 +'emoji/congratulations.gif'},
{'src':process.env.API_URL2 +'emoji/dancing.gif'},
{'src':process.env.API_URL2 +'emoji/devil2.gif'},
{'src':process.env.API_URL2 +'emoji/dj.gif'},
{'src':process.env.API_URL2 +'emoji/dj2.gif'},
{'src':process.env.API_URL2 +'emoji/don.gif'},
{'src':process.env.API_URL2 +'emoji/fight.gif'},
{'src':process.env.API_URL2 +'emoji/flamethrower.gif'},
{'src':process.env.API_URL2 +'emoji/gm.gif'},
{'src':process.env.API_URL2 +'emoji/gn.gif'},
{'src':process.env.API_URL2 +'emoji/hahaha.gif'},
{'src':process.env.API_URL2 +'emoji/hammer.gif'},
{'src':process.env.API_URL2 +'emoji/happy.gif'},
{'src':process.env.API_URL2 +'emoji/hehe.gif'},
{'src':process.env.API_URL2 +'emoji/hello.gif'},
{'src':process.env.API_URL2 +'emoji/horseride.gif'},
{'src':process.env.API_URL2 +'emoji/hot.gif'},
{'src':process.env.API_URL2 +'emoji/injail.gif'},
{'src':process.env.API_URL2 +'emoji/INR.png'},
{'src':process.env.API_URL2 +'emoji/jetli.gif'},
{'src':process.env.API_URL2 +'emoji/kiss.gif'},
{'src':process.env.API_URL2 +'emoji/kngt.gif'},
{'src':process.env.API_URL2 +'emoji/lift.gif'},
{'src':process.env.API_URL2 +'emoji/locked.gif'},
{'src':process.env.API_URL2 +'emoji/lol (1).gif'},
{'src':process.env.API_URL2 +'emoji/lol.gif'},
{'src':process.env.API_URL2 +'emoji/lotpot.gif'},
{'src':process.env.API_URL2 +'emoji/matrix.gif'},
{'src':process.env.API_URL2 +'emoji/musicus.gif'},
{'src':process.env.API_URL2 +'emoji/nana.gif'},
{'src':process.env.API_URL2 +'emoji/nope.gif'},
{'src':process.env.API_URL2 +'emoji/s0817.gif'},
{'src':process.env.API_URL2 +'emoji/s0818.gif'},
{'src':process.env.API_URL2 +'emoji/s0819.gif'},
{'src':process.env.API_URL2 +'emoji/sorry.gif'},
{'src':process.env.API_URL2 +'emoji/t0126.gif'},
{'src':process.env.API_URL2 +'emoji/t0127.gif'},
{'src':process.env.API_URL2 +'emoji/t0130.gif'},
{'src':process.env.API_URL2 +'emoji/t2002.gif'},
{'src':process.env.API_URL2 +'emoji/t0131.gif'},
{'src':process.env.API_URL2 +'emoji/t2015.gif'},
{'src':process.env.API_URL2 +'emoji/t2019.gif'},
{'src':process.env.API_URL2 +'emoji/t2022.gif'},
{'src':process.env.API_URL2 +'emoji/t2027.gif'},
{'src':process.env.API_URL2 +'emoji/t2215.gif'},
{'src':process.env.API_URL2 +'emoji/t2224.gif'}, 
{'src':process.env.API_URL2 +'emoji/t2622.gif'},
{'src':process.env.API_URL2 +'emoji/t2629.gif'},
{'src':process.env.API_URL2 +'emoji/t2636.gif'},
{'src':process.env.API_URL2 +'emoji/t2637.gif'},
{'src':process.env.API_URL2 +'emoji/t3902.gif'},
{'src':process.env.API_URL2 +'emoji/t3905.gif'},
{'src':process.env.API_URL2 +'emoji/t4402.gif'},
{'src':process.env.API_URL2 +'emoji/t4414.gif'},
{'src':process.env.API_URL2 +'emoji/t4427.gif'},
{'src':process.env.API_URL2 +'emoji/Thanks.gif'},
{'src':process.env.API_URL2 +'emoji/welcome.gif'},

]

 
//add emoji
const addemoji=(item)=>{
 toast("Emoji Added Succefully.")
 let img=`${value}`+'<img src='+`${item.src}` +' className="img1"/>';
 setValue(img);
 editor.chain().focus().setImage({ src: item.src }).run()
 setOpen(false);
}

//submit
const submit =()=>{
  if(!value)
  {
    toast.error('Comment Required.');
    return
  }
  value=quotevalue+value;
 let fd={'comment':value,orginal}
let result=ChatFormPost(fd);
result.then(response=>{
 
 if(response.data.status==true)
 {
   setValue('');
   toast(response.data.message);
   window.location.reload();
 }

}) 
}

 //like
 const like=(item)=>
 {
  //  console.log(item);
   let fd={id:item.id}
   let result=ChatLike(fd);
   result.then(response=>{
 if(response.data.status==true)
 {
   toast(response.data.message);
   window.location.reload();
 }
   });

 }
 //dislike
 const dislike=(item)=>
 {
   console.log(item);
   let fd={id:item.id}
   let result=ChatDislike(fd);
   result.then(response=>{
 if(response.data.status==true)
 {
   toast(response.data.message);
   window.location.reload();
 }
   });
   setSize(2);
 }

 const quote=(item)=>{
  setOrginal(1);
  console.log('check');
  let add='Orignally posted by:'+item.username;
 setQuoteValue('<div style="background:#82e38524;color:red">'+add+item.comment+'</div>');
  // editor.chain().focus().setContent('<div class="d-flex">'+add+item.comment+'</div>').run()
 
 }

 const orginpost=()=>
 {
  if(orgin==0)
  {
    setOrgin(1);
  }
  if(orgin==1)
  {
 
    setOrgin(0);
  }
 
 }

 const editor = useEditor({
  extensions: [
    Document,
    Paragraph,
    Text,
    Image.configure({ inline: true }),
    Dropcursor,
    TextStyle
  ],
  content: ``,
  onUpdate({ editor }) {
    setValue(editor.getHTML());
  },
})
 

const {loadingMore,isReachedEnd,error,size,setSize,paginatedPost}=usePagination(`chat-forum?orginal=${orgin}&search=${search}`);
  return (
    <>
 
<div className="text-center py-3 text-family1 guessing-forum">
<h3 style={{'marginBottom':'0px'}}>Chat Forum</h3> 
 {/* <div className='text-color1'>Date:10/07/2022</div> */}
 </div> 
 
 <div className='content-wrap1'>
  <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/cta-bg-shape.png"  className='img1'/>
  {/* <div></div> */}
 
  <div className="text-center text-family text-justify">
  Satta Matka Kalyan Main Mumbai Fastest Results
Get Kalyan Matka Main Mumbai Satta Matka Market Results Fastest Live Update. Get All Kalyan,Main Mumbai,Madhur Matka,Rajdhani,Milan,Madhur Matka And Time Bazar Jodi Penal Panel Patti Panna Charts For Free . All Matka Guessing.With Best Guessers , Online Old Charts , Satta Matka Number Software Links, Online Charts List Pdf Download And Top Matka Guessing Free Number Provided By Sattamatka143 Professor And Master Dr Admin Sir.
Other Special Features Include 220 Patti Satta Weekly Matka Jodi Chart With Direct Access To Guessing Form Of Experts Tricks Access Via Website

</div>
</div>
 
      <CssBaseline />
     
<Login token={token} user={user}/>
      {!token?'': <Container maxWidth="lg" className="content-wrap1 py-20 text-center">
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
          <div className="emoji">
            {emoji && emoji.map((item,index)=>{
 return(
<img key={index} className="emoji_img" src={item.src} alt="df"  onClick={() => addemoji(item)}/> 
            )
            })}
          </div>
        </Box>
      </Modal>
       
       {console.log(quotevalue)}
     
      {quotevalue?<div className="text-center py-3 text-capitalize" dangerouslySetInnerHTML={{__html: quotevalue}}></div>:''} 
      {/* <ReactQuill value={value} onChange={setValue}/> */}
      <EditorContent editor={editor} />

<div className="text-center">   <a href="#" className="btn button" onClick={submit}>Submit</a></div>
      </Container>
      }
 
<div className="content-wrap2 text-center" style={{'padding':'25px'}}>
 <div className="guessing-button"><Link href={`top-10-users`}><a>Top 10 Users</a></Link></div>
 {orgin==0?<div className="guessing-button" onClick={orginpost}>Show Original Post</div>:<div className="guessing-button" onClick={orginpost}>Show All Post</div>}
  
  <input onChange={(e)=>setSearch(e.target.value)} className="search"/>
        {/* <div className="guessing-button"> Serach</div> */}
</div>
 
  {/* form list */}
      {/* {console.log(paginatedPost)} */}
 {error && <p>something went wrong</p>}
 {!paginatedPost && <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>}
 {paginatedPost?.map((item,index)=>
 (

  <div className='guessing-content' key={index}>

<div className='guessing-heading clearfix'>
<div className='float-left bold'><div className="d-flex"><AccountCircleIcon /> <span style={{'margin':'2px 5px 0px 5px'}}>{item.username}</span></div></div>
    <div className='float-right date'>{item.time}</div>

</div>
 
 {item.status==1?<div className="text-center py-3 text-capitalize" dangerouslySetInnerHTML={{__html: item.comment}}></div> :<div className="text-center py-3"><p className="text-red">Your Account Has Been Blocked.</p><p>{item.username}</p></div>} 

<div className="clearfix guessing-footer">
  <div className="float-left" onClick={()=>quote(item)} style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer','fontWeight':'600'}}>(Quote)</div>
 
  <div className="float-right"><span style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer'}}  onClick={() => like(item)}><ThumbUpIcon fontSize="small"/>  {item.like}</span>
  <span style={{'margin':'0px 15px 0px 0px','color':'rgb(138 10 164)','cursor':'pointer'}} onClick={() => dislike(item)}><ThumbDownAltIcon fontSize="small"/> <span style={{'margin':'0px 0px 0px 5px','color':'rgb(138 10 164)'}}>{item.dislike}</span></span> </div>
</div>
 </div>
  
 )
 )}

 {paginatedPost && paginatedPost.length>0?'':<h2 className="text-center">Not Found</h2>}
  
 
  {loadingMore && <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>}
  {!isReachedEnd  && <div className="text-center "><a className="btn button mt-10" onClick={()=>setSize(size+1)}>Load More</a></div>}
    </>
  );
}
