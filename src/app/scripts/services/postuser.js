import axios from 'axios';
import { URL_API_USER } from './data.js';

export const postU = async (user) => {
    try {
        const response = await axios.post(URL_API_USER, user);
        return response
    } catch (error) {
        console.log(error);
        return error;
    }
}