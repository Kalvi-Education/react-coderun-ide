export const DEFAULT_HEIGHT = "400px";
export const DEFAULT_WIDTH = "800px";

export const flexBoxContainer: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

export const flexboxContainerHorizontal: React.CSSProperties = {
  ...flexBoxContainer,
  flexDirection: "row",
  flexWrap: "nowrap",
};

export const defaultVerticalContainerStyling: React.CSSProperties = {
  ...flexBoxContainer,
  flexDirection: "column",
  resize: "horizontal",
  overflow: "scroll",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  width: "50%",
  marginRight: "10px",
  height: DEFAULT_HEIGHT,
};

export const controlStyling: React.CSSProperties = {
  marginTop: "3%",
};

export const defaultPreviewStyling: React.CSSProperties = {
  alignSelf: "stretch",
  minWidth: "10%",
  height: DEFAULT_HEIGHT,
  flexGrow: 1,
};

export const defaultContainerSizing: React.CSSProperties = {
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  overflow: "hidden",
  paddingBottom: "20px",
};
