
import React from 'react';
import { Star } from 'lucide-react';
import { useSupabaseTestimonials } from '@/hooks/use-supabase-testimonials';

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

const TestimonialsList: React.FC<TestimonialsListProps> = ({ staticTestimonials }) => {
  const { approvedReviews, loading } = useSupabaseTestimonials();
  
  // Combine static testimonials with approved Supabase reviews
  const allTestimonials = [...staticTestimonials, ...approvedReviews];
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-md animate-pulse">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="w-5 h-5 bg-gray-200 rounded mr-1"></div>
              ))}
            </div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {allTestimonials.map((testimonial) => (
        <div key={`${testimonial.id}-${testimonial.name}`} className="bg-white rounded-lg p-6 shadow-md card-hover">
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
