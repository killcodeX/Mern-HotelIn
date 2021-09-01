import { ApiFunc } from './authApi'


// get apis

export const getAllhotelsApi = async () => {
  try {
    let { data }  = await ApiFunc.get(`/hotelin/all-hotels`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglehotelsApi = async (id) => {
  try {
    let { data }  = await ApiFunc.get(`/hotelin/single-hotels/${id}`);
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

export const bookingApi = async () =>{
  try{
    let { data }  = await ApiFunc.get(`/hotelin/all-booking`);
    return data;
  } catch(error){
    console.log(error)
  }
}