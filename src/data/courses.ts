import { Course } from '../types/course';
import ReactImage from '../assets/images/reactimage.jpeg';
import RN from '../assets/images/reactnative.png';
import UI_UX from '../assets/images/ui_ux.jpeg';
import Typescr from '../assets/images/typescript.jpeg';


export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React and build your first app',
    instructor: 'Otieno B',
    price: 49.99,
    category: 'Web Development',
    skillLevel: 'Beginner',
    popularity: 95,
    image: ReactImage,
    progress: 75,
  },
  {
    id: '2',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript and improve your code quality',
    instructor: 'Billy Odhiambo',
    price: 79.99,
    category: 'Programming',
    skillLevel: 'Advanced',
    popularity: 88,
    image: Typescr,
    progress: 30,
  },
  {
    id: '3',
    title: 'UX/UI Design Fundamentals',
    description: 'Learn the principles of user-centered design',
    instructor: 'Steve Omondi',
    price: 59.99,
    category: 'Design',
    skillLevel: 'Intermediate',
    popularity: 92,
    image: UI_UX,
  },
  {
    id: '4',
    title: 'React native Mobile Dev',
    description: 'Learn the principles of user-centered design',
    instructor: 'Mavine Naaman',
    price: 29.99,
    category: 'Design',
    skillLevel: 'Intermediate',
    popularity: 92,
    image: RN,
  },
];
