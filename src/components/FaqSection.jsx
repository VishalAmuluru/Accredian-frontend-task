import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: 'Do I need to have prior experience to enroll?', answer: 'The program is designed for all levels of experience...' },
  { question: 'What is the minimum system configuration required?', answer: 'A stable internet connection, updated browser...' },
];

const FaqSection = () => {
  return (
    <Box sx={{ py: 6, background: '#fff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: 800, margin: 'auto' }}>
        {faqs.map((item, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FaqSection;
