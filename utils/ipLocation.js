import axios from "axios";

export default async function ipLocation() {
        try {
            const response = await axios.get('http://ip-api.com/json')
                .then(function (responseData) {
                    return responseData.data;
                });
            return response;
    
        } catch (error) {
            console.error(error);
        }
    };