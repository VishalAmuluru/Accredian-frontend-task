import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const ReferralProgress = ({ currentReferrals, targetReferrals }) => {
  const progress = (currentReferrals / targetReferrals) * 100;
  return (
    <Box sx={{ width: '80%', margin: 'auto', my: 4, textAlign: 'center' }}>
      <Typography variant="h6">
        {`You have referred ${currentReferrals} of ${targetReferrals} friends!`}
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
    </Box>
  );
};

export default ReferralProgress;
