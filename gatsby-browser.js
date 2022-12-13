import React from 'react';
import {AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence mode='wait'>{element}</AnimatePresence>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // console.log(location)
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.3 * 1000 * 2

  // if it's a "normal" route
  if (location.action === "PUSH" && !location.hash) {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  // if we used the browser's forwards or back button
  else if (!location.hash) {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]

    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }

  else {
    return;
  }

  return false
}