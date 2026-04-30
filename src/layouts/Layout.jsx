import React from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar />
      <main className="pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
