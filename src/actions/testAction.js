export function inc() {
  return function(dispatch) {
    dispatch({ type: "INCREMENT" });
  };
}

export function dec() {
  return function(dispatch) {
    dispatch({ type: "DECREMENT" });
  };
}
