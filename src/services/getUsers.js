import axios from "axios";

const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=8');
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error);
      return []
    }
  };

  export default  getUsers