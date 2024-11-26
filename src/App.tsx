import React, { useState } from 'react';
import { CourseListingPage } from './components/CourseListingPage';
import { PaymentConfirmationModal } from './components/PaymentConfirmationModal';
import { courses } from './data/courses';

const App: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handlePurchase = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <CourseListingPage onPurchase={handlePurchase} />
      <PaymentConfirmationModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        course={selectedCourse}
      />
    </>
  );
};

export default App;

