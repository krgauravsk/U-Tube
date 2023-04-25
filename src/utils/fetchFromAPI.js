import axios from "axios";
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    // method: 'GET',
    url: BASE_URL,
    params: {
        // part: 'snippet',
        // videoId: 'M7FIvfx5J10',
        maxResults: '50'
    },
    headers: {
        //   'X-RapidAPI-Key': 'e3a49eef21msh467f8633ba6b80cp1af24djsn8ad36e60afe1',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
