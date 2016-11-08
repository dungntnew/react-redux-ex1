export const selectUser = (user) => {
  console.log('u click user: ' + user.first)
  return {
    type: "USER_SELECTED",
    payload: user
  }
};

