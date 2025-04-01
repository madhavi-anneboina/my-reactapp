import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) {
      console.error("portal-root element not found in DOM.");
      return null;
    }
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    portalRoot

  )
};

export default PortalDemo;
