import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = (props) => {
  const { editorValue, handleEditorChange } = props;

  return (
    <Editor
      apiKey="dkjc7u9vtye9rmnzboxfdyuyqsjle58rt4lhp5dnahild73d"
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss  code fullscreen preview hr",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | align checklist numlist bullist |  link image | media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | lineheight indent outdent hr | emoticons charmap | removeformat | code fullscreen preview",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
      initialValue=""
      value={editorValue}
      onEditorChange={(newValue) => {
        handleEditorChange(newValue);
      }}
    />
  );
};

export default TinyEditor;
