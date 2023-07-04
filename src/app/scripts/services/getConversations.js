import axios from 'axios';
import { URL_API_CONVER } from './data';


export const getConversations = async (endpoint) => {
    try {
        const response = await axios.get(`${URL_API_CONVER}?idUser1=${endpoint}`);
        const respon = await axios.get(`${URL_API_CONVER}?idUser2=${endpoint}`)
        console.log(response.data);

        const conOne = response.data;
        const conTwo = respon.data;

        if (response.status === 200){
            // return response.data

            if (respon.status === 200)
            {
                const conversatios = conOne.concat(conTwo);
                return conversatios;
            }

        }
    } catch (error) {
        console.log(error)
        return [];
    }
}
