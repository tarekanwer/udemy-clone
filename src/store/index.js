import { createStore } from "redux";
const initState = { x: 0, y: 0, showOverlay: false, cords: { x: 0, y: 0 } };

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right * 1.02;
    let y = 730;
    return {
      x,
      y,
      showOverlay: true,
    };
  }
  if (action.type === "hide") {
    const mouseX = state.cords.x;
    const mouseY = state.cords.y;
    const y = state.y;
    const x = state.x;
    let bool = false;
    if (x + 30 > mouseX) {
      bool = true;
    }
    if (mouseY > y) {
      bool = false;
    }
    return { x: state.x, y: state.y, showOverlay: bool };
  }

  if (action.type === "get") {
    let cords = action.cords;
    return {
      x: state.x,
      y: state.y,
      cords,
      showOverlay: state.showOverlay,
    };
  }

  return state;
};

const store = createStore(overlayReducer);

export default store;
