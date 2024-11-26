import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Course } from '../types/course';

interface PaymentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

export const PaymentConfirmationModal: React.FC<PaymentConfirmationModalProps> = ({ isOpen, onClose, course }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment Confirmation</DialogTitle>
          <DialogDescription>Thank you for your purchase!</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Transaction Details</h3>
            <p>Course: {course.title}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-medium">Order Summary</h3>
            <div className="flex justify-between">
              <span>Course Price</span>
              <span>${course.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>${course.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
