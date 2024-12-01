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
      <DialogContent
        className="bg-white rounded-lg p-6 w-full max-w-lg mx-auto md:max-w-md sm:max-w-sm lg:max-w-xl"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">Payment Confirmation</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Thank you for your purchase!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg">Transaction Details</h3>
            <p className="text-sm">Course: {course.title}</p>
            <p className="text-sm">Instructor: {course.instructor}</p>
            <p className="text-sm">Date: {new Date().toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Course Price</span>
              <span>${course.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2 text-base">
              <span>Total</span>
              <span>${course.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button onClick={onClose} className="w-full md:w-auto">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};