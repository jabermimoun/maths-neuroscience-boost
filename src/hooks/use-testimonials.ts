
import { useState, useEffect } from 'react';
import { TestimonialType } from '@/types/testimonial';
import { useToast } from './use-toast';

export const useTestimonials = (staticTestimonials: TestimonialType[]) => {
  const { toast } = useToast();
  const [pendingReviews, setPendingReviews] = useState<TestimonialType[]>([]);
  const [approvedReviews, setApprovedReviews] = useState<TestimonialType[]>([]);
  
  const loadReviews = () => {
    try {
      console.log('TestimonialsPage: Loading reviews from localStorage');
      
      const pendingData = localStorage.getItem('pendingReviews');
      console.log('Raw pending reviews data:', pendingData);
      let storedPending: TestimonialType[] = [];
      
      if (pendingData) {
        try {
          storedPending = JSON.parse(pendingData);
          console.log('Parsed pending reviews:', storedPending);
        } catch (e) {
          console.error('Error parsing pending reviews:', e);
          storedPending = [];
        }
      }
      
      const approvedData = localStorage.getItem('approvedReviews');
      console.log('Raw approved reviews data:', approvedData);
      let storedApproved: TestimonialType[] = [];
      
      if (approvedData) {
        try {
          storedApproved = JSON.parse(approvedData);
          console.log('Parsed approved reviews:', storedApproved);
        } catch (e) {
          console.error('Error parsing approved reviews:', e);
          storedApproved = [];
        }
      }
      
      setPendingReviews(storedPending);
      setApprovedReviews(storedApproved);
    } catch (error) {
      console.error('Error loading reviews from localStorage:', error);
    }
  };
  
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'pendingReviews' || e.key === 'approvedReviews') {
      loadReviews();
    }
  };
  
  useEffect(() => {
    loadReviews();
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  const approveReview = (reviewId: number) => {
    console.log('Approving review with ID:', reviewId);
    const reviewToApprove = pendingReviews.find(review => review.id === reviewId);
    if (!reviewToApprove) return;
    
    const updatedPending = pendingReviews.filter(review => review.id !== reviewId);
    const updatedApproved = [...approvedReviews, { ...reviewToApprove, status: 'approved' }];
    
    setPendingReviews(updatedPending);
    setApprovedReviews(updatedApproved);
    
    localStorage.setItem('pendingReviews', JSON.stringify(updatedPending));
    localStorage.setItem('approvedReviews', JSON.stringify(updatedApproved));
    
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'pendingReviews',
      newValue: JSON.stringify(updatedPending)
    }));
    
    toast({
      title: "Avis approuvé",
      description: "L'avis a été approuvé avec succès.",
    });
  };
  
  const deleteReview = (reviewId: number, isPending: boolean) => {
    if (isPending) {
      const updatedPending = pendingReviews.filter(review => review.id !== reviewId);
      setPendingReviews(updatedPending);
      localStorage.setItem('pendingReviews', JSON.stringify(updatedPending));
    } else {
      const updatedApproved = approvedReviews.filter(review => review.id !== reviewId);
      setApprovedReviews(updatedApproved);
      localStorage.setItem('approvedReviews', JSON.stringify(updatedApproved));
    }
    
    toast({
      title: "Avis supprimé",
      description: "L'avis a été supprimé avec succès.",
    });
  };

  const refreshReviews = () => {
    loadReviews();
    toast({
      title: "Actualisation",
      description: "La liste des avis a été actualisée.",
    });
  };
  
  return {
    pendingReviews,
    approvedReviews,
    approveReview,
    deleteReview,
    refreshReviews,
    loadReviews
  };
};
