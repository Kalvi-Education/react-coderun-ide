import { useState, useEffect, useRef } from "react";
import { allowedLanguagesType, IIdeProps } from "../models";
import Jsdoodle from "../services/runner/jsdoodle";

import Editor from "./Editor";
import LanguageSelect from "./LanguageSelect";
import Output from "./Output";

import {
  defaultContainerSizing,
  defaultPreviewStyling,
  defaultVerticalContainerStyling,
  flexboxContainerHorizontal,
} from "./Styles";

const Ide = (props: IIdeProps) => {
  // Logic States

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState<allowedLanguagesType>(
    props.language ?? ("javascript" as unknown as allowedLanguagesType)
  );
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  // Style States

  const [containerSizing, setContainerSizing] = useState(
    defaultContainerSizing
  );
  const [previewStyling, setPreviewStyling] = useState(defaultPreviewStyling);
  const [verticalContainerStyling, setVerticalContainerStyling] = useState(
    defaultVerticalContainerStyling
  );

  // Style hooks

  useEffect(() => {
    setContainerSizing({
      ...defaultContainerSizing,
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
    });

    setPreviewStyling({
      ...defaultPreviewStyling,
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
    });

    setVerticalContainerStyling({
      ...defaultVerticalContainerStyling,
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
    });
  }, [props.width, props.height]);

  // Actions

  const handleEditorChange = (value: string | undefined, event: any) => {
    setCode(value ?? "");
    if (props.onChange) {
      props.onChange(value, event);
    }
  };

  const handleLanguageChange = (value: allowedLanguagesType) => {
    setLanguage(value);
  };

  const runCode = async () => {
    setLoading(true);
    const output = await props.run(code, language);
    if (output.error) {
      setOutput(output.error);
    } else if (output.output) {
      setOutput(output.output);
    } else {
      throw new Error("No output or error given by run function");
    }
    setLoading(false);
    if (props.onRun) {
      const runObject = {
        code,
        language,
        output,
      };
      props.onRun(runObject);
    }
  };

  // TEMP

  return (
    <div style={containerSizing}>
      <div style={flexboxContainerHorizontal}>
        <div style={verticalContainerStyling}>
          <LanguageSelect language={language} onChange={handleLanguageChange} />
          <Editor
            value={
              props.options.templates.find(
                (template) => template.lang === language
              )?.code
            }
            onChange={handleEditorChange}
            language={language}
            height={containerSizing.height}
          />
        </div>
        <div id="previewStyling" style={previewStyling}>
          <button onClick={runCode}>Run code</button>

          <Output
            height={containerSizing.height}
            loading={loading}
            value={output}
          />
        </div>
      </div>
    </div>
  );
};

export default Ide;
