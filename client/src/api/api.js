import axios from "axios";

const baseUrl = "http://localhost:5000/hotel";

export const getAllhotelsApi = async () => {
  try {
    let { data }  = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
