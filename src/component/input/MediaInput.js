import { FileInput } from "react-admin";
import MediaField from "../field/MediaField";
import React from "react";

const MediaInput = ({ title, ...props }) => (
  <FileInput {...props}>
    <MediaField source="filepath" title={title} />
  </FileInput>
);

export default MediaInput;
