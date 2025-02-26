import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        accredian
      </Typography>
      <Typography variant="body2" gutterBottom>
        Unlock your dream career path with tailored expert advice.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Schedule a Call Now
      </Button>
    </Box>
  );
};

export default Footer;
