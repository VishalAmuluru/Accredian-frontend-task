import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  { title: 'Submit Referrals', description: 'Easily add your friend’s details via our referral form.' },
  { title: 'Earn Rewards', description: 'Get rewarded once your friend enrolls in a course.' },
  { title: 'Bonus After 30 Days', description: 'Receive additional benefits after successful completion.' },
];

const HowToRefer = () => {
  return (
    <Box sx={{ py: 6, background: '#fff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        How Do I Refer?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ textAlign: 'center', p: 3, border: '1px solid #eee', borderRadius: 2 }}>
              <CheckCircleIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowToRefer;
