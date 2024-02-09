// lib/dataFetching.js
import axios from 'axios';

export async function fetchData() {
  let photos = [];
  let users = [];

  try {
    const photosResponse = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4");
    photos = photosResponse.data;

    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=8');
    users = usersResponse.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    photos,
    users,
  };
}
