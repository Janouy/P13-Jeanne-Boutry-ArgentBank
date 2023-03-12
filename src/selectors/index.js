// Add selectors to get datas from Redux
export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectMessage = (state) => state.auth.message;
