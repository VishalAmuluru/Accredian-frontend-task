import React from 'react';
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RewardSelector = ({ selectedReward, onChange }) => {
  return (
    <Box sx={{ my: 2 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose Your Reward</FormLabel>
        <RadioGroup row name="reward" value={selectedReward} onChange={onChange}>
          <FormControlLabel value="discount" control={<Radio />} label="Discount" />
          <FormControlLabel value="cashback" control={<Radio />} label="Cashback" />
          <FormControlLabel value="points" control={<Radio />} label="Bonus Points" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default RewardSelector;
