// Structure générale/squelette des pages du site

import React, { ReactNode } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

// Définition de la structure avec les composants qui seront toujours présents.
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 320px, max-width: 768px)');
  return (
    <div className="flex flex-row w-screen h-screen bg-slate-100">
      {isMobile || isTablet ? (
        <div>
          <Header />
          <main>{children}</main>
          <Navbar />
          <Footer />
        </div>
      ) : (
        <div className="flex flex-row w-screen h-screen bg-slate-100">
          <Sidebar />
          <div className="flex flex-col"><main>{children}</main>
            <Footer />
          </div>
        </div>
      )}
      {/* Définition des notifications react-toastify */}
      <ToastContainer autoClose={1000} />
    </div>
  );
}
