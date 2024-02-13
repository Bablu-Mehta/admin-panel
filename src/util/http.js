import axios from "axios";

// const url = "http://localhost:3000/";

export const fetchUser = async (url) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while fetching the Data.",
    });
  }
};

export const deleteUser = async (url, id) => {
  try {
    const response = await axios.delete(url + id);
    return response;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while deleting the User.",
    });
  }
};