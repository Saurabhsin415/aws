import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
 
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

const modules = {
  toolbar: {
    container: [["bold", "italic"], ["emoji"]]
  },
  "emoji-toolbar": true,
  "emoji-textarea": true,
  "emoji-shortname": true
};

export default () => {
 
  Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji
    },
    true
  );

  const customBoldHandler = () => {
    console.log("clicked...");
  };

  const [value, setValue] = useState("");

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};
