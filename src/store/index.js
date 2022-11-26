import { createStore } from "redux";
const initState = {
  x: 0,
  y: 0,
  xn : 0
};

const overlayReducer = (state = initState, action) => {
  if (action.type === "show") {
    let position = action.position;
    let x = position.right * 1.01 ;
    let xn = position.left - 330;
    let y = 745;
    return {
      x,
      y,
      xn
    };
  }
  return state;
};

const store = createStore(overlayReducer);

export default store;
