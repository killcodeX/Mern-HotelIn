import {
  GetAllHotel,
  GetSingleHotel,
  GetCityHotel,
  FilterHotel,
  SearchHotel,
  BookHotel
} from "./actionConstant";

import {
  getAllhotelsApi,
  getSinglehotelsApi,
  getFilterCitiesApi,
  getSearchHotelsApi,
  bookHotelsApi
} from "../../api/api";
import { saveState } from '../../helpers/localStorage';

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

export const doHotelBook = (data) => async (dispatch) => {
  const result = await bookHotelsApi(data);
  saveState('hotelIn booking details',result)
  dispatch({
    type:BookHotel,
    payload:result,
  })
}

export const checkStorageBooking = () => {
  console.log('called local for booking details')
  return{
    type:BookHotel
  }
}