import React, { useState } from 'react';
import { Layout } from './Layout';
import { CourseCard } from './CourseCard';
import { Sidebar } from './Sidebar';
import { Pagination } from './ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { courses } from '../data/courses';
import { Course } from '../types/course';

interface CourseListingPageProps {
  onPurchase: (course: Course) => void;
}

export const CourseListingPage: React.FC<CourseListingPageProps> = ({ onPurchase }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'popularity' | 'price_low_to_high' | 'price_high_to_low'>('popularity');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const coursesPerPage = 6;

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popularity') return b.popularity - a.popularity;
    if (sortBy === 'price_low_to_high') return a.price - b.price;
    if (sortBy === 'price_high_to_low') return b.price - a.price;
    return 0;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);

  const handleFilterChange = (filters: any) => {
    const filtered = courses.filter(course => 
      (filters.categories.length === 0 || filters.categories.includes(course.category)) &&
      (course.price >= filters.priceRange[0] && course.price <= filters.priceRange[1]) &&
      (filters.skillLevel === '' || course.skillLevel === filters.skillLevel)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-screen">
        {/* Sidebar */}
        <Sidebar className="w-full lg:w-1/4 p-4 h-full overflow-auto" onFilterChange={handleFilterChange} />
        
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6 h-full overflow-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-center sm:text-left mb-4 sm:mb-0">
              Available Courses
            </h1>
            <Select onValueChange={(value: 'popularity' | 'price_low_to_high' | 'price_high_to_low') => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price_low_to_high">Price: Low to High</SelectItem>
                <SelectItem value="price_high_to_low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} onPurchase={() => onPurchase(course)} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
