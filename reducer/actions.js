export const addFav = (favBooking) => {
  return {
    type: "FAV_BOOKING",
    payload: favBooking,
  };
};

export const addBookData = (bookData) => {
  return {
    type: "BOOK_DATA",
    payload: bookData,
  };
};
