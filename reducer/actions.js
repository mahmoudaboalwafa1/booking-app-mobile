export const addFav = (favBooking) => {
  return {
    type: "favBooking",
    payload: favBooking,
  };
};
