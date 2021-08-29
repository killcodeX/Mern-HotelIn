import { ApiFunc } from './authApi'


// get apis

export const getAllhotelsApi = async () => {
  try {
    let { data }  = await ApiFunc.get(`/hotelin`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglehotelsApi = async (id) => {
  try {
    let { data }  = await ApiFunc.get(`/hotelin/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getFilterCitiesApi = async (city) => {
  try {
    let { data }  = await ApiFunc.get(`/hotelin/city/${city}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};



// post apis

export const getSearchHotelsApi = async (body) => {
  try {
    let { data }  = await ApiFunc.post(`/hotelin/search`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const bookHotelsApi = async (body) => {
  try {
    let { data }  = await ApiFunc.post(`/hotelin/book-hotel`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};