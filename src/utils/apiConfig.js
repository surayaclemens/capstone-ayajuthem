import axios from "axios";

// const dataURL = 'http://localhost:5050/phrases';


const dataURL = `$process.env.REACT_APP_SERVER_URL`

const phrasesAPI = {
    getAll: () => {
        return axios.get(dataURL)
    },
}

export default phrasesAPI;