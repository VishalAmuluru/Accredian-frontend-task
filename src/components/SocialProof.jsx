import React from 'react';
import { Box, Avatar, Typography, List, ListItem } from '@mui/material';

const recentReferrals = [
  { name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=5' },
  { name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=6' },
  { name: 'Charlie', avatar: 'https://i.pravatar.cc/40?img=7' },
  { name: 'David', avatar: 'https://i.pravatar.cc/40?img=8' },
  { name: 'Emma', avatar: 'https://i.pravatar.cc/40?img=9' },
  { name: 'Frank', avatar: 'https://i.pravatar.cc/40?img=10' },
  { name: 'Grace', avatar: 'https://i.pravatar.cc/40?img=11' },
  { name: 'Henry', avatar: 'https://i.pravatar.cc/40?img=12' },
  { name: 'Ivy', avatar: 'https://i.pravatar.cc/40?img=13' },
  { name: 'Jack', avatar: 'https://i.pravatar.cc/40?img=14' },
];

const SocialProof = () => {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        🌟 Recent Referrals 🌟
      </Typography>
      <List sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
        {recentReferrals.map((ref, index) => (
          <ListItem key={index} sx={{ display: 'inline-block', width: 'auto' }}>
            <Avatar alt={ref.name} src={ref.avatar} sx={{ mx: 0.5, width: 50, height: 50 }} />
            <Typography variant="body2">{ref.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialProof;
