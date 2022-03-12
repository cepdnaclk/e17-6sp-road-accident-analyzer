import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const ProgressBar = ({ title, percentage, color, classAppend, font }) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        return (
          <>
            <div className={"progress-bar-title " + (classAppend || "")}>
              {title}
            </div>
            <div className="progress">
              <div
                className={
                  "progress-bar " +
                  (classAppend || "") +
                  " " +
                  (isVisible ? "animated " : "")
                }
                style={{
                  width: isVisible ? `${percentage}%` : "20%",
                  background: color ? color : ""
                }}
              >
              </div>
              <span className={font || ""}>{percentage}%</span>
            </div>
          </>
        );
      }}
    </VisibilitySensor>
  );
};

export default ProgressBar;
