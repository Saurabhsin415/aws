import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const Editorss = dynamic(()=>import("../Editor"),{ssr:false});

export default function vvvv(props) {
    console.log('asdfasdf');
 
  const [data, setData] = useState("");
 
  const [editor, setEditor] = useState();

  useEffect(() => {
    console.log("mounted", editor);
    return () => {
      console.log("unmount init", editor);
      if (editor && editor.destroy) {
        console.log("unmounted", editor);
        editor.destroy();
      }
    };
  }, [editor, setEditor]);

 
 
  return (
    <>
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editorss/> 

      {JSON.stringify(data)}
    </div>
    </>
  );
}
