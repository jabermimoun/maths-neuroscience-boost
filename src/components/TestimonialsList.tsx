
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  content: string;
  rating: number;
}

interface TestimonialsListProps {
  staticTestimonials: Testimonial[];
}

// Get approved reviews from localStorage with better error handling
const getApprovedReviews = (): Testimonial[] => {
  try {
    console.log('TestimonialsList: Getting approved reviews from localStorage');
    const storedData = localStorage.getItem('approvedReviews');
    
    if (!storedData) {
      console.log('No approved reviews found in localStorage');
      return [];
    }
    
    try {
      const approvedReviews = JSON.parse(storedData);
      console.log('Found approved reviews:', approvedReviews);
      return Array.isArray(approvedReviews) ? approvedReviews : [];
    } catch (parseError) {
      console.error('Error parsing approvedReviews from localStorage:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Error loading approved reviews:', error);
    return [];
  }
};

const TestimonialsList: React.FC<TestimonialsListProps> = ({ staticTestimonials }) => {
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(staticTestimonials);
  
  useEffect(() => {
    // Initial load of testimonials
    loadTestimonials();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [staticTestimonials]);
  
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'approvedReviews') {
      loadTestimonials();
    }
  };
  
  const loadTestimonials = () => {
    // Combine static testimonials with approved user testimonials
    const approvedReviews = getApprovedReviews();
    const combined = [...staticTestimonials, ...approvedReviews];
    
    console.log('Combined testimonials:', combined);
    setAllTestimonials(combined);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {allTestimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md card-hover">
          <div className="flex mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={20} className="text-vibrant-orange fill-vibrant-orange" />
            ))}
          </div>
          
          <blockquote className="text-gray-700 mb-6">
            "{testimonial.content}"
          </blockquote>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
              <span className="text-dark-blue font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-bold text-dark-blue">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.relation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsList;
