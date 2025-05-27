


import axios from "axios";

const API_URL = "https://popx-backend-51nh.onrender.com/api";

export const fetchForms = async () => {
  try {
    const response = await axios.get(`${API_URL}/forms`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forms", error);
  }
};

export const submitForm = async (formData) => {
  try {
    await axios.post(`${API_URL}/submit-form`, formData);
  } catch (error) {
    console.error("Error submitting form", error);
  }
};

export const deleteForm = async (id) => {
  try {
    await axios.delete(`${API_URL}/forms/${id}`);
  } catch (error) {
    console.error("Error deleting form", error);
  }
};