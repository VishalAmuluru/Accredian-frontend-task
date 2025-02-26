import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with actual backend URL

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error('Error submitting referral:', error);
    throw error;
  }
};
