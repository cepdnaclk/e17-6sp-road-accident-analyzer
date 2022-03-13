import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Icofont from "react-icofont";

const AlertDismissible = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant={variant}>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => setShow(!show)}
      >
        <Icofont icon="close" />
      </button>
      {children}
    </Alert>
  ) : null;
};

export default AlertDismissible;
