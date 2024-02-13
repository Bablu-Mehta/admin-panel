import axios from "axios";

// const url = "http://localhost:3000/";

const BASE_URL = "http://localhost:3000/";

export const fetchUser = async () => {
  try {
    const response = await axios(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while fetching the Data.",
    });
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(BASE_URL + id);
    return response;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while deleting the User.",
    });
  }
};
