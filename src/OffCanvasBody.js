import React from "react";
import PropTypes from "prop-types";

const OffCanvasBody = ({
  width,
  transitionDuration,
  isMenuOpened,
  position,
  effect,
  className,
  style,
  children,
}) => {
  // closed state style
  const translateX = position === "left" ? 0 : 0;
  const closedStyle = {
    transitionDuration: `${transitionDuration}ms`,
    transform: `translate(${translateX}px, 0px)`,
    backfaceVisibility: "hidden",
  };

  // open state style
  let translateOpenX = position === "left" ? width : -1 * width;
  translateOpenX = effect === "parallax" ? translateOpenX / 2 : translateOpenX;
  translateOpenX = effect === "overlay" ? 0 : translateOpenX;

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

OffCanvasBody.defaultProps = {
  width: 250,
  transitionDuration: 250,
  isMenuOpened: false,
  position: "left",
  effect: "push",
  style: {},
  className: "",
  children: null,
};

OffCanvasBody.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default OffCanvasBody;
