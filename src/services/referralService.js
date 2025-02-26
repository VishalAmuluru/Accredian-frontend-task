import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://accredian-backend-task-bjlf.onrender.com/api';

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error('Error submitting referral:', error);
    throw error;
  }
};
