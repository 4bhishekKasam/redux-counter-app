const initialtState = {
  count: 0
};

export default function(state = initialtState, actions) {
  switch (actions.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    case "RESET":
      return {
        count: 0
      };

    default:
      return state;
  }
}
