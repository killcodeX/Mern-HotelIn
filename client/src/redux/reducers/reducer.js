import { GetAllHotel, GetSingleHotel } from "../actions/actionConstant";

const initialState = {
    allHotels: [],
  };

// Reducers
const ProductReducer = (state = initialState, action) => {
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
  
  export default ProductReducer;