import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
 
import 'react-quill/dist/quill.snow.css';
  
export default function Guessingforum() {
    console.log('asdfasdf');
 
  const [data, setData] = useState("");
 
  const [editor, setEditor] = useState();

  // useEffect(() => {
  //   console.log("mounted", editor);
  //   return () => {
  //     console.log("unmount init", editor);
  //     if (editor && editor.destroy) {
  //       console.log("unmounted", editor);
  //       editor.destroy();
  //     }
  //   };
  // }, [editor, setEditor]);

 
 
  return (
    <>
    <div className="App">
      <h1>ckEditor 5</h1>
      {console.log(data)}
      <ReactQuill value={data} onChange={setData}/>
      {/* <Editorss/>  */}

  
    </div>
    </>
  );
}
