const API_URL = "http://localhost:3000";

export const submitReferral = async (name, email) => {
  try {
    const response = await fetch(`${API_URL}/api/referrals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error submitting referral:", error);
  }
};
