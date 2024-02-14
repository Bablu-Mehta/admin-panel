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

export const creatingUser = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while fetching the Data.",
    });
  }
};

export const fetchSingleUser = async (id) => {
  try {
    const response = await axios(BASE_URL + id);
    return response.data;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while fetching the Data.",
    });
  }
};

export const updatingUser = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}${id}/edit`, data);
    return response.data;
  } catch (error) {
    throw new Error({
      message: error || "Something Went Wrong while fetching the Data.",
    });
  }
};
