import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const OffCanvasMenu = ({
  width,
  transitionDuration,
  isMenuOpened,
  position,
  className,
  style,
  children,
}) => {
  // closed state style
  const left = position === "left" ? `${0}px` : "auto";
  const right = position === "left" ? "auto" : `${-1 * width}px`;
  const translateX = position === "left" ? -1 * width : 0;
  const closedStyle = {
    width: `${width}px`,
    position: "fixed",
    top: "0px",
    left,
    right,
    transform: `translate(${translateX}px, 0px)`,
    transitionDuration: `${transitionDuration}ms`,
    backfaceVisibility: "hidden",
  };

  // open state style
  const translateOpenX = position === "left" ? 0 : -1 * width;
  const openStyle = {transform: `translate(${translateOpenX}px, 0px)`};

  // create current state styles
  let currStyle = {...closedStyle};
  if (isMenuOpened) {
    currStyle = {...currStyle, ...openStyle};
  }

  return (
    <div style={{...currStyle, ...style}} className={className}>
      {children}
    </div>
  );
};

OffCanvasMenu.defaultProps = {
  width: 250,
  transitionDuration: 250,
  isMenuOpened: false,
  position: "left",
  style: {},
  className: "",
  children: null,
};

OffCanvasMenu.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default OffCanvasMenu;
