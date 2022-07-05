import axios from "axios";

const dataURL = 'http://localhost:5050/phrases';

const phrasesAPI = {
    getAll: () => {
        return axios.get(dataURL)
    },
}

export default phrasesAPI;