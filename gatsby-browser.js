// const React = require("react");
// const {AnimatePresence} = require("framer-motion");

import React from 'react';
import {AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
); 

function anchorScroll(location){
  // Check for location so build does not fail
  if (location && location.hash.length > 0) {
    // need slight delay so DOM is there to get position to scroll to
    setTimeout(() => {
      const item = document.getElementById(location.hash.slice(1)).offsetTop;
      window.scrollTo({top: item, left: 0, behavior: 'smooth'});
    }, 500);
  }
  return false;
}


export const onRouteUpdate = ({location}) => {
  anchorScroll(location);

  return true;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  //  transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = .3 * 1000 * 2
  if (location.action === 'PUSH' && !location.hash) {
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  } else if (!location.hash) {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      TRANSITION_DELAY
    );
  }
  return false;
};