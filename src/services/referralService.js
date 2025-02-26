import axios from 'axios';

const API_BASE_URL = 'https://accredian-backend-task-bjlf.onrender.com/api'; // render link

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error('Error submitting referral:', error);
    throw error;
  }
};
