import { createStore } from "redux";
const initState = {
  x: 0,
  y: 0,
  showOverlay: false,
  hoverCard: false,
  hoverOverlay: false,
};

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right ;
    let y = 750;
    state.hoverCard = action.hoverCard;
    state.hoverOverlay = action.hoverOverlay;
    if (state.hoverCard || state.hoverOverlay) {
      state.showOverlay = true;
    }
    return {
      x,
      y,
      showOverlay: state.showOverlay,
    };
  }
  if (action.type === "hide") {
    state.hoverCard = action.hoverCard;
    state.hoverOverlay = action.hoverOverlay;
    if (!state.hoverCard && !state.hoverOverlay) {
      state.showOverlay = false;
    }

    return { x: state.x, y: state.y, showOverlay: state.showOverlay };
  }

  return state;
};

const store = createStore(overlayReducer);

export default store;
