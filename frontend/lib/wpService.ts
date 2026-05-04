import axios from 'axios';

const WP_API_URL = 'https://danynaturalconcept.org/wp-json/wp/v2';

export const getWpPosts = async () => {
  try {
    const response = await axios.get(`${WP_API_URL}/posts?_embed`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles WP:', error);
    return [];
  }
};
