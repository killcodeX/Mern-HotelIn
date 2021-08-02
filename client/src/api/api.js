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

export const getSinglehotelsApi = async (id) => {
  try {
    let { data }  = await axios.get(`${baseUrl}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getFilterCitiesApi = async (city) => {
  try {
    let { data }  = await axios.get(`${baseUrl}/?city=${city}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
