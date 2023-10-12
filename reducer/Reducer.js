const initialState = {
  favBooking: [],
  bookData: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAV_BOOKING":
      return {
        ...state,
        favBooking: action.payload,
      };
    case "BOOK_DATA":
      return {
        ...state,
        bookData: action.payload,
      };
  }
  return state;
};

export default Reducer;
