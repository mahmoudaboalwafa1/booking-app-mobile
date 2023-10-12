const initialState = {
  favBooking: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "favBooking":
      return {
        ...state,
        favBooking: action.payload,
      };
  }
  return state;
};

export default Reducer;
