import { GetAllHotel, GetSingleHotel } from "./actionConstant";

import { getAllhotelsApi, getSinglehotelsApi } from "../../api/api";

// actions
export const getAllhotel = () => async (dispatch) => {
  const result = await getAllhotelsApi();
  dispatch({
    type: GetAllHotel,
    payload: result,
  });
};


export const getSingleHotel = (id) => async (dispatch) => {
  console.log('recived id',id)
  const result = await getSinglehotelsApi(id);
  dispatch({
    type: GetSingleHotel,
    payload: result,
  });
};
