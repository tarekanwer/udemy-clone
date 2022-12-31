import { createStore } from "redux";
const initState = {
  x: 0,
  xn: 0,
  R: false,
  L: false,
};

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right * 1.01;
    let xn = position.left - 330;
    let overlay = action.overlay;
    let R;
    let L;
    if (overlay === "R") {
      R = true;
      L = false;
    }
    if (overlay === "L") {
      L = true;
      R = false;
    }
    return {
      x,
      xn,
      R,
      L,
    };
  }
  return state;
};

const store = createStore(overlayReducer);

export default store;
