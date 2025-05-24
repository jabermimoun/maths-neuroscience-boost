
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from './use-toast';
import { TestimonialType } from '@/types/testimonial';

export const useSupabaseTestimonials = () => {
  const { toast } = useToast();
  const [pendingReviews, setPendingReviews] = useState<TestimonialType[]>([]);
  const [approvedReviews, setApprovedReviews] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = async () => {
    try {
      console.log('Loading testimonials from Supabase...');
      
      // Load pending reviews
      const { data: pending, error: pendingError } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (pendingError) {
        console.error('Error loading pending reviews:', pendingError);
        throw pendingError;
      }

      // Load approved reviews
      const { data: approved, error: approvedError } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (approvedError) {
        console.error('Error loading approved reviews:', approvedError);
        throw approvedError;
      }

      console.log('Loaded pending reviews:', pending);
      console.log('Loaded approved reviews:', approved);

      setPendingReviews(pending || []);
      setApprovedReviews(approved || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les avis depuis la base de données.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitReview = async (reviewData: {
    name: string;
    relation: string;
    content: string;
    rating: number;
  }) => {
    try {
      console.log('Submitting review to Supabase:', reviewData);
      
      const { data, error } = await supabase
        .from('testimonials')
        .insert([{
          name: reviewData.name,
          relation: reviewData.relation,
          content: reviewData.content,
          rating: reviewData.rating,
          status: 'pending'
        }])
        .select()
        .single();

      if (error) {
        console.error('Error submitting review:', error);
        throw error;
      }

      console.log('Review submitted successfully:', data);
      
      // Refresh reviews to include the new one
      await loadReviews();
      
      return data;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  };

  const approveReview = async (reviewId: number) => {
    try {
      console.log('Approving review:', reviewId);
      
      const { error } = await supabase
        .from('testimonials')
        .update({ status: 'approved' })
        .eq('id', reviewId);

      if (error) {
        console.error('Error approving review:', error);
        throw error;
      }

      toast({
        title: "Avis approuvé",
        description: "L'avis a été approuvé avec succès.",
      });

      // Refresh reviews
      await loadReviews();
    } catch (error) {
      console.error('Error approving review:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'approuver l'avis.",
        variant: "destructive",
      });
    }
  };

  const deleteReview = async (reviewId: number) => {
    try {
      console.log('Deleting review:', reviewId);
      
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', reviewId);

      if (error) {
        console.error('Error deleting review:', error);
        throw error;
      }

      toast({
        title: "Avis supprimé",
        description: "L'avis a été supprimé avec succès.",
      });

      // Refresh reviews
      await loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'avis.",
        variant: "destructive",
      });
    }
  };

  const refreshReviews = async () => {
    await loadReviews();
    toast({
      title: "Actualisation",
      description: "La liste des avis a été actualisée.",
    });
  };

  useEffect(() => {
    loadReviews();

    // Set up real-time subscription
    const subscription = supabase
      .channel('testimonials_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'testimonials' 
        }, 
        (payload) => {
          console.log('Real-time update received:', payload);
          loadReviews();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    pendingReviews,
    approvedReviews,
    loading,
    loadReviews,
    submitReview,
    approveReview,
    deleteReview,
    refreshReviews
  };
};
