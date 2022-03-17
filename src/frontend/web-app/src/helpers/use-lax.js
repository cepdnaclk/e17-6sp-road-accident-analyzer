import React from "react";
import lax from "lax.js";

let selector = "lax";

function useLax({ breakpoints, className } = {}) {
  const requestRef = React.useRef();
  selector = className || selector;

  React.useEffect(() => {
    lax.setup({ breakpoints, selector: `.${selector}` });

    const updateLax = () => {
      lax.update(window.scrollY);
      requestRef.current = window.requestAnimationFrame(updateLax);
    };

    requestRef.current = window.requestAnimationFrame(updateLax);

    return () => {
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, [breakpoints, className]);
}

function useLaxElement() {
  const ref = React.useRef();

  React.useEffect(() => {
    const currentNode = ref.current;

    // @ts-ignore
    if (currentNode && currentNode.classList && currentNode.classList.add) {
      // @ts-ignore
      currentNode.classList.add(selector);
    }

    lax.addElement(currentNode);

    return () => {
      lax.removeElement(currentNode);
    };
  }, []);

  return ref;
}

export { useLax, useLaxElement };
