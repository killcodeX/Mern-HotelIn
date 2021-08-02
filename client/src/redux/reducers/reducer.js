import {
  GetAllHotel,
  GetSingleHotel,
  GetCityHotel,
  FilterHotel,
} from "../actions/actionConstant";

const initialState = {
  allHotels: [],
  singleHotel: {},
  citiesHotel: [],
  filterData: [],
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllHotel:
      return {
        ...state,
        allHotels: action.payload || [],
      };
    case GetSingleHotel:
      return {
        ...state,
        singleHotel: action.payload || {},
      };
    case GetCityHotel:
      return {
        ...state,
        citiesHotel: action.payload,
        filterData: action.payload
      };
    case FilterHotel:
      let data = action.payload;
      if (data == "ah") {
        return {
          ...state,
          filterData: state.citiesHotel,
        };
      } else if (data == "plh") {
        console.log("plh");
        let sortData = state.citiesHotel.sort((a, b) => a.price - b.price);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "phl") {
        let sortData = state.citiesHotel.sort((a, b) => b.price - a.price);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "rlh") {
        let sortData = state.citiesHotel.sort((a, b) => a.rating - b.rating);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "rhl") {
        let sortData = state.citiesHotel.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          filterData: sortData,
        };
      }
    default:
      return state;
  }
};

export default ProductReducer;
