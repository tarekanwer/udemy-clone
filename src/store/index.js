import { createStore } from "redux";
const initState = { position: {}, showOverlay: false };

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right - position.width;
    let y = position.bottom + position.height * 0.5;
    return {
      x,
      y,
      showOverlay: true,
    };
  }
  if (action.type === "hide") {
    return { x: state.x, y: state.y, showOverlay: false };
  }

  return state;
};

const store = createStore(overlayReducer);

export default store;
