import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from '@mui/material';

const programData = [
  {
    name: 'Professional Certificate in Project Management',
    referrerBonus: '₹ 7,000',
    refereeBonus: '₹ 11,000',
  },
  {
    name: 'PG Certificate in Strategic Project Management',
    referrerBonus: '₹ 13,000',
    refereeBonus: '₹ 21,000',
  },
  // Add more rows as needed...
];

const ReferralBenefits = () => {
  return (
    <Box sx={{ py: 6, background: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Are The Referral Benefits?
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Program</TableCell>
              <TableCell>Referrer Bonus</TableCell>
              <TableCell>Referee Bonus</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programData.map((program, index) => (
              <TableRow key={index}>
                <TableCell>{program.name}</TableCell>
                <TableCell>{program.referrerBonus}</TableCell>
                <TableCell>{program.refereeBonus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReferralBenefits;
