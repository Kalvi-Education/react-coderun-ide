import { useEffect, useState } from "react";
import { IOutputProps } from "../models";

const defaultOutputStyling: React.CSSProperties = {
  minHeight: "30px",
  fontFamily: "Lucida Console, Courier New, monospace",
};

const Output = (props: IOutputProps) => {
  const [outputStyling, setOutputStyling] = useState(defaultOutputStyling);

  useEffect(() => {
    setOutputStyling({
      ...defaultOutputStyling,
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
    });
  }, [props.width, props.height]);

  return (
    <>
      <div style={outputStyling}>
        {props.loading
          ? "Loading..."
          : props.value && props.value.length > 0
          ? props.value
          : "Output"}
      </div>
    </>
  );
};

export default Output;
