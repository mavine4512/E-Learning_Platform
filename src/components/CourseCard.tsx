import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
  onPurchase: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPurchase }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4 rounded-md" />
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
        <p className="text-sm font-medium">Instructor: {course.instructor}</p>
        <p className="text-sm font-medium">Category: {course.category}</p>
        <p className="text-sm font-medium">Skill Level: {course.skillLevel}</p>
        {course.progress !== undefined && (
          <div className="mt-2">
            <Progress value={course.progress} className="w-full" />
            <p className="text-xs text-muted-foreground mt-1">{course.progress}% complete</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">${course.price.toFixed(2)}</span>
        <Button onClick={onPurchase}>{course.progress !== undefined ? 'Continue' : 'Enroll'}</Button>
      </CardFooter>
    </Card>
  );
};