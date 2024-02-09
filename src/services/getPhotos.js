import axios from "axios";

const getPhotos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
      );
      return response.data
    } catch (error) {
      console.error("Error fetching photos:", error);
      return []
    }
  };

  export default getPhotos;
