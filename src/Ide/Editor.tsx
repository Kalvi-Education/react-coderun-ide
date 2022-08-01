import MonacoEditor from "@monaco-editor/react";

import { IEditorProps } from "../models";

const codeEditorStyle: React.CSSProperties = {
  border: "2px solid black",
  height: "100%",
};

const Editor = (props: IEditorProps) => {
  // * Need monaco-editor package for types
  const handleEditorChange = (value: string | undefined, event: any) => {
    if (props.onChange) {
      props.onChange(value, event);
    }
  };

  return (
    <div style={codeEditorStyle}>
      <MonacoEditor
        key={props.language.toString()}
        defaultLanguage={props.language.toString()}
        defaultValue={props.value ?? "// Start writing your code here"}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
