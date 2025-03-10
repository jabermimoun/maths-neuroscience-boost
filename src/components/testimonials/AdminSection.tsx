
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import PendingReviewItem from './PendingReviewItem';
import ApprovedReviewItem from './ApprovedReviewItem';
import { TestimonialType } from '@/types/testimonial';

interface AdminSectionProps {
  pendingReviews: TestimonialType[];
  approvedReviews: TestimonialType[];
  onGoToAdminPanel: () => void;
  onApproveReview: (reviewId: number) => void;
  onDeleteReview: (reviewId: number, isPending: boolean) => void;
}

const AdminSection: React.FC<AdminSectionProps> = ({
  pendingReviews,
  approvedReviews,
  onGoToAdminPanel,
  onApproveReview,
  onDeleteReview
}) => {
  return (
    <div className="mb-12 bg-gray-100 p-6 rounded-lg border-2 border-red-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-red-600">Section Admin</h2>
        <Button
          onClick={onGoToAdminPanel}
          variant="outline"
          className="border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange/10"
        >
          <Shield className="mr-2 h-4 w-4" />
          Aller au panneau d'administration complet
        </Button>
      </div>
      
      {pendingReviews.length > 0 ? (
        <>
          <h3 className="text-xl font-semibold mb-4">Avis en attente de validation ({pendingReviews.length})</h3>
          <div className="grid grid-cols-1 gap-4">
            {pendingReviews.map((review) => (
              <PendingReviewItem 
                key={review.id}
                review={review}
                onApprove={onApproveReview}
                onDelete={onDeleteReview}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-600">Aucun avis en attente de validation.</p>
      )}
      
      {approvedReviews.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Avis approuvés ({approvedReviews.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {approvedReviews.map((review) => (
              <ApprovedReviewItem
                key={review.id}
                review={review}
                onDelete={onDeleteReview}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSection;
