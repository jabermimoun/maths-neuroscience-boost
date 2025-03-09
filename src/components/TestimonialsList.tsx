
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
    
    console.log('Raw approvedReviews data:', storedData);
    
    if (!storedData) {
      console.log('No approved reviews found in localStorage');
      return [];
    }
    
    try {
      const approvedReviews = JSON.parse(storedData);
      console.log('Found approved reviews:', approvedReviews);
      
      // Ensure the result is an array
      if (!Array.isArray(approvedReviews)) {
        console.warn('approvedReviews from localStorage is not an array, returning empty array');
        return [];
      }
      
      return approvedReviews;
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
  
  // Function to load testimonials
  const loadTestimonials = () => {
    try {
      // Combine static testimonials with approved user testimonials
      const approvedReviews = getApprovedReviews();
      const combined = [...staticTestimonials, ...approvedReviews];
      
      console.log('Combined testimonials:', combined);
      setAllTestimonials(combined);
    } catch (error) {
      console.error('Error combining testimonials:', error);
      setAllTestimonials(staticTestimonials); // Fallback to static testimonials
    }
  };
  
  // Function to handle storage events
  const handleStorageChange = (e: StorageEvent) => {
    console.log('Storage change detected:', e.key);
    if (e.key === 'approvedReviews' || e.key === 'pendingReviews') {
      console.log('Reloading testimonials due to storage change');
      loadTestimonials();
    }
  };
  
  useEffect(() => {
    // Initial load of testimonials
    loadTestimonials();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events
    const handleCustomEvent = () => {
      console.log('Custom reviewsUpdated event detected');
      loadTestimonials();
    };
    
    window.addEventListener('reviewsUpdated', handleCustomEvent);
    
    // Clean up
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('reviewsUpdated', handleCustomEvent);
    };
  }, [staticTestimonials]);
  
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
