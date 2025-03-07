import React, {useCallback, useState} from "react";
// eslint-disable-next-line import/no-unresolved
import {OffCanvas, OffCanvasMenu, OffCanvasBody} from "react-offcanvas";

import styles from "./styles.css";

const App = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  // toggles the menu opened state
  const handleClick = useCallback(() => {
    setMenuOpened(value => !value);
  }, []);

  return (
    <OffCanvas
      width={300}
      transitionDuration={300}
      isMenuOpened={isMenuOpened}
      position={"right"}
      effect={"overlay"}
    >
      <OffCanvasBody
        className={styles.bodyClass}
        style={{fontSize: "30px"}}
      >
        <p>This is the main body container.</p>
        <p>
          <a href="#" onClick={handleClick}>
            Click here
          </a>{" "}
          to toggle the menu.
        </p>
      </OffCanvasBody>
      <OffCanvasMenu className={styles.menuClass}>
        <p>Placeholder content.</p>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>
            <a href="#" onClick={handleClick}>
              Toggle Menu
            </a>
          </li>
        </ul>
      </OffCanvasMenu>
    </OffCanvas>
  );
};

export default App;
