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
import {GuessingFormGet,GuessingFormPost,Like,Dislike,UserInfo} from "../api/app"; 
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
    //  console.log(errors);   console.log(result);

    setUser(result?result.data:'');
    settoken(Cookies.get('auth_token'));
    // setUser(JSON.parse(Cookies.get('user_info')));
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
  {'src':'emoji/adore.gif'},
  {'src':'emoji/aetsch.gif'},
  {'src':'emoji/angry.gif'},
  {'src':'emoji/angrywife.gif'},
  {'src':'emoji/announce.gif'},
  {'src':'emoji/avatar224.gif'},
  {'src':'emoji/b0201.gif'},
  {'src':'emoji/b0225.gif'},
  {'src':'emoji/balle balle.gif'},
  {'src':'emoji/banghead.gif'},
  {'src':'emoji/banned 3.gif'},
  {'src':'emoji/bath.gif'},
  {'src':'emoji/bawl.gif'},
  {'src':'emoji/bebored.gif'},
  {'src':'emoji/beee.gif'},
  {'src':'emoji/beer.gif'},
  {'src':'emoji/bigboss.gif'},
  {'src':'emoji/biggrin.gif'},
  {'src':'emoji/biggrinangel.gif'},
  {'src':'emoji/birthday.gif'},
  {'src':'emoji/boxing.gif'},
  {'src':'emoji/brushing.gif'},
  {'src':'emoji/bsanta.gif'},
  {'src':'emoji/bye.gif'},
  {'src':'emoji/call.gif'},
  {'src':'emoji/chat.gif'},
  {'src':'emoji/ciao.gif'},
  {'src':'emoji/confuse.gif'},
  {'src':'emoji/congrats.gif'},
  {'src':'emoji/congratulations.gif'},
  {'src':'emoji/dancing.gif'},
  {'src':'emoji/devil2.gif'},
  {'src':'emoji/dj.gif'},
  {'src':'emoji/dj2.gif'},
  {'src':'emoji/don.gif'},
  {'src':'emoji/fight.gif'},
  {'src':'emoji/flamethrower.gif'},
  {'src':'emoji/gm.gif'},
  {'src':'emoji/gn.gif'},
  {'src':'emoji/hahaha.gif'},
  {'src':'emoji/hammer.gif'},
  {'src':'emoji/happy.gif'},
  {'src':'emoji/hehe.gif'},
  {'src':'emoji/hello.gif'},
  {'src':'emoji/horseride.gif'},
  {'src':'emoji/hot.gif'},
  {'src':'emoji/injail.gif'},
  {'src':'emoji/INR.png'},
  {'src':'emoji/jetli.gif'},
  {'src':'emoji/kiss.gif'},
  {'src':'emoji/kngt.gif'},
  {'src':'emoji/lift.gif'},
  {'src':'emoji/locked.gif'},
  {'src':'emoji/lol (1).gif'},
  {'src':'emoji/lol.gif'},
  {'src':'emoji/lotpot.gif'},
  {'src':'emoji/matrix.gif'},
  {'src':'emoji/musicus.gif'},
  {'src':'emoji/nana.gif'},
  {'src':'emoji/nope.gif'},
  {'src':'emoji/s0817.gif'},
  {'src':'emoji/s0818.gif'},
  {'src':'emoji/s0819.gif'},
  {'src':'emoji/sorry.gif'},
  {'src':'emoji/t0126.gif'},
  {'src':'emoji/t0127.gif'},
  {'src':'emoji/t0130.gif'},
  {'src':'emoji/t2002.gif'},
  {'src':'emoji/t0131.gif'},
  {'src':'emoji/t2015.gif'},
  {'src':'emoji/t2019.gif'},
  {'src':'emoji/t2022.gif'},
  {'src':'emoji/t2027.gif'},
  {'src':'emoji/t2215.gif'},
  {'src':'emoji/t2224.gif'}, 
  {'src':'emoji/t2622.gif'},
  {'src':'emoji/t2629.gif'},
  {'src':'emoji/t2636.gif'},
  {'src':'emoji/t2637.gif'},
  {'src':'emoji/t3902.gif'},
  {'src':'emoji/t3905.gif'},
  {'src':'emoji/t4402.gif'},
  {'src':'emoji/t4414.gif'},
  {'src':'emoji/t4427.gif'},
  {'src':'emoji/Thanks.gif'},
  {'src':'emoji/welcome.gif'},
  
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
let result=GuessingFormPost(fd);
result.then(response=>{
 
 if(response.data.status==true)
 {
   setValue('');
   toast(response.data.message);
   window.location.reload();
 }
 if(response.data.status==false)
 {
  
   toast(response.data.message);
   window.location.reload();
 }

}) 
}

 //like
 const like=(item)=>
 {
   console.log(item);
   let fd={id:item.id}
   let result=Like(fd);
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
   let result=Dislike(fd);
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
  // console.log('check');
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
 

const {loadingMore,isReachedEnd,error,size,setSize,paginatedPost}=usePagination(`guessing-forum?orginal=${orgin}&search=${search}`);
  return (
    <>
 
<div className="text-center py-3 text-family1 guessing-forum">
<h3 style={{'marginBottom':'0px'}}>Guessing Forum</h3> 
 {/* <div className='text-color1'>Date:10/07/2022</div> */}
 </div> 
 
 <div className="liveUpdate">
 
<div className='content-wrap1 py-3'>
<h2
className="expert-subheading"
>SATTAMATKA GUESSING FORUM RULES</h2>  
  👉 DONT USE BAD WORDS IN FORUM <br />
  👉DONT POST YOUR PHONE OR LINKS <br />
  👉DONT POST AT RESULT TIME. <br />
  👉DONT POST WRONG RESULT.<br />
  👉FOLLOW RULES,OTHERWISE YOUR.<br />
  👉*IP* WILL BE BLOCKED PERMENTLY.<br />
  👉GAME PASS HONE PAR WISH KARE.<br />
  👉LAST TIME RESULT SE 10 MIN PEHLE.<br />
  👉MAXIMUM 2 OPEN 6 JODI 6 PANEL.<br />
</div>
  
</div>
 
 
      <CssBaseline />
 
<Login token={token} user={user}/>
      {token && user && user.type==3?<Container maxWidth="lg" className="content-wrap1 py-20 text-center">
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
      </Container>:<div className="text-center py-3">This forum is not allowed.</div>
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

  <div className='guessing-content' key={index} style={{'border':'2px solid #e74c3c'}}>

<div className='guessing-heading clearfix' style={{'background':'linear-gradient(-141deg, #ef4938, #f12a16)'}}>
    <div className='float-left bold'><div className="d-flex"><AccountCircleIcon /> <span style={{'margin':'2px 5px 0px 5px'}}>{item.username}</span></div></div>
    <div className='float-right date'>{item.time}</div>
 
</div>
 {item.status==1?<div className="text-center py-15 text-capitalize" dangerouslySetInnerHTML={{__html: item.comment}}></div> :<div className="text-center py-3"><p className="text-red">Your Account Has Been Blocked.</p><p>{item.username}</p></div>}


<div className="clearfix guessing-footer" style={{'background':'#ff321d33'}}>
  <div className="float-left" onClick={()=>quote(item)} style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer','fontWeight':'600'}}>(Quote)</div>
 
  <div className="float-right"><span style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer'}}  onClick={() => like(item)}><ThumbUpIcon fontSize="small"/> {item.like}</span>
  <span style={{'margin':'0px 15px 0px 0px','color':'rgb(138 10 164)','cursor':'pointer'}} onClick={() => dislike(item)}><ThumbDownAltIcon fontSize="small"/><span style={{'margin':'0px 0px 0px 5px','color':'rgb(138 10 164)'}}>{item.dislike}</span></span> </div>
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
