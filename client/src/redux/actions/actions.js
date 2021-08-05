import {
  GetAllHotel,
  GetSingleHotel,
  GetCityHotel,
  FilterHotel,
  SearchHotel,
} from "./actionConstant";

import {
  getAllhotelsApi,
  getSinglehotelsApi,
  getFilterCitiesApi,
  getSearchHotelsApi,
} from "../../api/api";

// actions
export const getAllhotel = () => async (dispatch) => {
  const result = await getAllhotelsApi();
  dispatch({
    type: GetAllHotel,
    payload: result,
  });
};

export const getSingleHotel = (id) => async (dispatch) => {
  console.log("recived id", id);
  const result = await getSinglehotelsApi(id);
  dispatch({
    type: GetSingleHotel,
    payload: result,
  });
};

export const getCityHotel = (city) => async (dispatch) => {
  const result = await getFilterCitiesApi(city);
  dispatch({
    type: GetCityHotel,
    payload: result,
  });
};

export const getFilter = (data) => {
  return {
    type: FilterHotel,
    payload: data,
  };
};

export const getSearchResults = (data) => async (dispatch) => {
  const result = await getSearchHotelsApi(data);
  dispatch({
    type: SearchHotel,
    payload: result,
  });
};
