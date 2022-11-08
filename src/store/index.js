import { createStore } from "redux";
const initState = { x: 0, y: 0, showOverlay: false };

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right * 1.02;
    let y = position.bottom * 1.1;
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
