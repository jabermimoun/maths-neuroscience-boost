
import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={20} className="text-[#FFD700] fill-[#FFD700]" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mr-4">
          <span className="text-[#1C1C1C] font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-bold text-[#000000]">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.relation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
