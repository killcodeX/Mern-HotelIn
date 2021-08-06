import axios from "axios";

const baseUrl = "http://localhost:5000/hotel";


// get apis

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
    let { data }  = await axios.get(`${baseUrl}/city/${city}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};



// post apis

export const getSearchHotelsApi = async (body) => {
  try {
    let { data }  = await axios.post(`${baseUrl}/search`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const bookHotelsApi = async (body) => {
  try {
    let { data }  = await axios.post(`${baseUrl}/book-hotel`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};