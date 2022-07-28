import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      
      Dropcursor,
 
    ],
    content: `
      <p>This is a basic example of implementing images. Drag to re-order.</p>
    
    `,
  })

  const addImage = () => {
    const url = window.prompt('URL')
console.log
    if (url) {
      editor.chain().focus().insertContent(url).run()
    }
  }

  return (
    <div>
      <button onClick={addImage}>add image from URL</button>
      <EditorContent editor={editor} />
    </div>
  )
}