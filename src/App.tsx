
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import MethodPage from '@/pages/MethodPage';
import BookingPage from '@/pages/BookingPage';
import BlogListPage from '@/pages/BlogListPage';
import BlogPost from '@/pages/BlogPost';
import TestimonialsPage from '@/pages/TestimonialsPage';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import AdminPanel from '@/pages/AdminPanel';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/methode" element={<MethodPage />} />
        <Route path="/reserver" element={<BookingPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/temoignages" element={<TestimonialsPage />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
