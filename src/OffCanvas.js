import React from "react";
import PropTypes from "prop-types";

const OffCanvas = ({
  width,
  transitionDuration,
  isMenuOpened,
  position,
  effect,
  children,
}) => {
  // transfer the <OffCanvas /> props to the children
  const transferProps = element => React.cloneElement(element, {
    width,
    transitionDuration,
    isMenuOpened,
    position,
    effect,
  });

  // transfer the props from OffCanvas to the child
  const offCanvasChildren = React.Children.map(children, transferProps);

  return <div>{offCanvasChildren}</div>;
};

OffCanvas.defaultProps = {
  width: 250,
  transitionDuration: 250,
  isMenuOpened: false,
  position: "left",
  effect: "push",
};

OffCanvas.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
  children: PropTypes.node.isRequired,
};

export default OffCanvas;
