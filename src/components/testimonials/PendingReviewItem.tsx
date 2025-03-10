
import React from 'react';
import { Star, Check, X } from 'lucide-react';
import { TestimonialType } from '@/types/testimonial';

interface PendingReviewItemProps {
  review: TestimonialType;
  onApprove: (id: number) => void;
  onDelete: (id: number, isPending: boolean) => void;
}

const PendingReviewItem: React.FC<PendingReviewItemProps> = ({ review, onApprove, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
      <div className="flex justify-between mb-2">
        <div>
          <span className="font-bold">{review.name}</span>
          {review.relation && <span className="text-gray-600"> ({review.relation})</span>}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onApprove(review.id)}
            className="p-1 bg-green-100 rounded-full text-green-600 hover:bg-green-200"
            title="Approuver"
          >
            <Check size={18} />
          </button>
          <button 
            onClick={() => onDelete(review.id, true)}
            className="p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
            title="Supprimer"
          >
            <X size={18} />
          </button>
        </div>
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

export default PendingReviewItem;
