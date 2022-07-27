import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { v4 as uuidv4 } from "uuid";
import classes from "./TextEditor.module.css";
// import { useState } from "react";

// export default function TextEditor({ description, setDescription }) {
//    const onEditorChange = (data) => {
//       setDescription(data);
//    };
//    return (
//       <CKEditor
//          className={classes.textEditor}
//          editor={ClassicEditor}
//          data={description}
//          id={uuidv4()}
//          onChange={(event, editor) => {
//             // const data = editor.getData();c
//             onEditorChange(event);
//          }}
//       />
//    );
// }

export default function TextEditor({ description, setDescription }) {
   return (
      <>
         <CKEditor
            editor={ClassicEditor}
            data={description}
            onReady={(editor) => {
               // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
               const data = editor.getData();
               setDescription(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
         />
      </>
   );
}
