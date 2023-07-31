import React, { useEffect, useRef, useState } from "react";
import {
  CodeEditorFormFieldProps,
  CodeEditorFormFieldResizeOption,
} from "./CodeEditorFormField.types";
import Editor from "@monaco-editor/react";

export const CodeEditorFormField = (props: CodeEditorFormFieldProps) => {
  //States

  const [isFocus, setIsFocus] = useState<boolean>(false);

  //Hooks

  const editorRef = useRef(null);

  //Methods

  function handleChange() {
    // @ts-ignore
    props.setValue(editorRef.current?.getValue());
  }

  const handleMount = (editor: any) => {
    editorRef.current = editor;
    // @ts-ignore
    editorRef.current.onDidChangeModelContent(handleChange);
    // @ts-ignore
    editorRef.current.onDidFocusEditorWidget(() => {
      setIsFocus(true);
    });
    // @ts-ignore
    editorRef.current.onDidBlurEditorWidget(() => {
      setIsFocus(false);
    });
  };
  return (
    <div
      className={`form-field code-editor-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <Editor
        className={`editor ${isFocus ? "focus" : ""}`}
        defaultLanguage="javascript"
        defaultValue={props.placeholder}
        value={props.value}
        onMount={handleMount}
      />
    </div>
  );
};
