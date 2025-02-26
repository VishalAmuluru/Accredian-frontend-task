import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ReferFormModal from './components/ReferFormModal';
import ReferralProgress from './components/ReferralProgress';
import SocialProof from './components/SocialProof';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentReferrals, setCurrentReferrals] = useState(3); // Sample value
  const targetReferrals = 10; // Sample target

  // Function to update referrals (for simulation)
  const addReferral = () => {
    setCurrentReferrals((prev) => (prev < targetReferrals ? prev + 1 : prev));
  };

  const handleReferClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <HeroSection onReferClick={handleReferClick} />
      <ReferralProgress currentReferrals={currentReferrals} targetReferrals={targetReferrals} />
      <HowToRefer />
      <ReferralBenefits />
      <SocialProof />
      <FaqSection />
      <Footer />
      <ReferFormModal open={modalOpen} onClose={handleCloseModal} />
      <button onClick={addReferral} style={{ margin: '20px auto', display: 'block' }}>
        Simulate Referral
      </button>
    </div>
  );
}

export default App;
