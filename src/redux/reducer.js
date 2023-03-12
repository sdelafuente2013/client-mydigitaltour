
const initialState = {
  profile: []
};
 
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SETPROFILE":
      return {
        ...state,
        profile: action.payload
      };
 
    default:
      return state;
  }
}
