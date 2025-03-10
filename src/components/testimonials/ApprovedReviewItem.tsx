
import React from 'react';
import { Star, X } from 'lucide-react';
import { TestimonialType } from '@/types/testimonial';

interface ApprovedReviewItemProps {
  review: TestimonialType;
  onDelete: (id: number, isPending: boolean) => void;
}

const ApprovedReviewItem: React.FC<ApprovedReviewItemProps> = ({ review, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-400">
      <div className="flex justify-between mb-2">
        <div>
          <span className="font-bold">{review.name}</span>
          {review.relation && <span className="text-gray-600"> ({review.relation})</span>}
        </div>
        <button 
          onClick={() => onDelete(review.id, false)}
          className="p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
          title="Supprimer"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex mb-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
        ))}
      </div>
      <p className="text-gray-700">"{review.content}"</p>
    </div>
  );
};

export default ApprovedReviewItem;
