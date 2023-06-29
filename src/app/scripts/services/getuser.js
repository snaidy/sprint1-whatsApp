import axios from 'axios';
import { URL_API_USER } from './data.js';

export const getuser = async () => {
    try {
        const response = await axios.get(URL_API_USER);
        console.log(response.data);
        if (response.status === 200){
            return response.data
        }
    } catch (error) {
        console.log(error)
        return [];
    }
}
