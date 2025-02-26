import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { submitReferral } from '../services/referralService';

const ReferFormModal = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.referrerName) tempErrors.referrerName = 'Required';
    if (!formValues.referrerEmail) tempErrors.referrerEmail = 'Required';
    if (!formValues.refereeName) tempErrors.refereeName = 'Required';
    if (!formValues.refereeEmail) tempErrors.refereeEmail = 'Required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setLoading(true);
      try {
        await submitReferral(formValues);
        alert('Referral submitted successfully!');
        onClose();
      } catch (error) {
        alert('Error submitting referral. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Course</DialogTitle>
      <DialogContent>
        <TextField label="Your Name" name="referrerName" fullWidth margin="dense" value={formValues.referrerName} onChange={handleChange} error={!!errors.referrerName} helperText={errors.referrerName} />
        <TextField label="Your Email" name="referrerEmail" fullWidth margin="dense" value={formValues.referrerEmail} onChange={handleChange} error={!!errors.referrerEmail} helperText={errors.referrerEmail} />
        <TextField label="Friend's Name" name="refereeName" fullWidth margin="dense" value={formValues.refereeName} onChange={handleChange} error={!!errors.refereeName} helperText={errors.refereeName} />
        <TextField label="Friend's Email" name="refereeEmail" fullWidth margin="dense" value={formValues.refereeEmail} onChange={handleChange} error={!!errors.refereeEmail} helperText={errors.refereeEmail} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReferFormModal;
