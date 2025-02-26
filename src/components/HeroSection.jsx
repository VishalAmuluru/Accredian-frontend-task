import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const HeroSection = ({ onReferClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleReferClick = async () => {
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    try {
      // Use environment variable for the API URL, falling back to localhost for development
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/referrals";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setName("");
        setEmail("");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 8,
        background: "#f5f5f5",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Let’s Learn & Earn
      </Typography>
      <Typography variant="h6" gutterBottom>
        Get a chance to win up to Rs. 15,000!
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />

      <Button variant="contained" color="primary" onClick={handleReferClick}>
        Refer Now
      </Button>
    </Box>
  );
};

export default HeroSection;
