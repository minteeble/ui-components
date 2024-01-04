import React from "react";
import { AppVersionLabelProps } from "./AppVersionLabel.types";

const AppVersionLabel = (props: AppVersionLabelProps) => {
  let defaultPattern = "$APP_NAME - $V - $ENV";
  let pattern = props.customPattern || defaultPattern;

  let appName = props.appName || "";
  let environmentName = props.environmentName || "";
  let version = props.version || "";

  pattern = pattern.replace("$APP_NAME", appName);
  pattern = pattern.replace("$ENV", environmentName);
  pattern = pattern.replace("$V", version);

  return (
    <div className="app-version-label-wrapper">
      <span className="version-label">{pattern}</span>
    </div>
  );
};

export default AppVersionLabel;
