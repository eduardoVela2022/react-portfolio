import { createRef, useRef } from "react";

// The footer component
function Footer() {
  return (
    <div>
      <p>
        My GitHub:{" "}
        <a href={"https://github.com/eduardoVela2022"}>
          https://github.com/eduardoVela2022
        </a>
      </p>
      <p>
        My LinkedIn:
        <a href={"https://www.linkedin.com/in/react-wizard/"}>
          https://www.linkedin.com/in/react-wizard/
        </a>
        /
      </p>
    </div>
  );
}

export default Footer;
