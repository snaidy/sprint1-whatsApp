import { URL_API_USER } from "./data";
import axios from "axios";

const getUserByPhone = async (phoneNumber) => {
  const url = `${URL_API_USER}?number=${phoneNumber}`;
  try {
      const { data } = await axios.get(url);
      
    return data[0]? data[0]:{};
  } catch (error) {
    console.log(error);
    return {};
  }
};

export default getUserByPhone;
