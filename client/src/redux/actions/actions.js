import { GetAllHotel, GetSingleHotel } from "./actionConstant";

import { getAllhotelsApi } from "../../api/api";

// actions
export const getAllhotel = () => async (dispatch) => {
  const result = await getAllhotelsApi();
  dispatch({
    type: GetAllHotel,
    payload: result,
  });
};
