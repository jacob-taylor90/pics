import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3WfncMfxGdooR-nWhPA24XqDdEQgLwFWH3P_FMwrl9o'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;