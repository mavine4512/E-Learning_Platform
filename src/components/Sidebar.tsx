import React, { useState } from 'react';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  onFilterChange: (filters: FilterOptions) => void;
  className?: string;
}

interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  skillLevel: string;
}

const categories = ['Web Development', 'Programming', 'Design', 'Business'];
const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [skillLevel, setSkillLevel] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  React.useEffect(() => {
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      skillLevel,
    });
  }, [selectedCategories, priceRange, skillLevel, onFilterChange]);

  return (
    <aside className={`bg-card border-r transition-all duration-300 ease-in-out ${isOpen ? 'w-68' : 'w-0 lg:w-64'}`}>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden absolute top-2 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </Button>

      <div className={`p-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox 
                  id={category} 
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={category} className="ml-2">{category}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Price Range</h3>
          <Slider
            min={0}
            max={200}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="my-4 bg-blue-200 dark:bg-blue-700 rounded-lg h-2"
          
          />
          <div className="flex justify-between mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Skill Level</h3>
          <RadioGroup value={skillLevel} onValueChange={setSkillLevel}>
            {skillLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem value={level} id={level} />
                <Label htmlFor={level}>{level}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      </div>
    </aside>
  );
};