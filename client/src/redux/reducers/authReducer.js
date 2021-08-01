import { GetAllHotel, GetSingleHotel } from "../actions/actionConstant";

const initialState = {
  user: {},
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllHotel:
      return {
        ...state,
        allHotels: action.payload || [],
      };
    default:
      return state;
  }
};

export default AuthReducer;
