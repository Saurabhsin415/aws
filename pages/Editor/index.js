import React, { Fragment, useState,useEffect,Component} from "react";
 
import CKEditors from "react-ckeditor-component";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

 

const Add_product = ({ onChange, editorLoaded, name, value }) => {
	const [content,setContent]=useState('asdfasd');
 
  // console.log("editor props ", props);
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
			  
							 <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
 
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
          console.log(data);
			         	setContent(data);
					 
					}
					  }
                    editor={ DecoupledEditor }
                    data={content}
		 
                /> </>
												 
 
	);
};

export default Add_product;
