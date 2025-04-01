'use client';

import React from 'react';
import { ResumeProvider } from '@/context/ResumeContext';
import { Inter, Roboto, Lato, Poppins, Montserrat } from 'next/font/google';

// Font definitions
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});
const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});

// Animation keyframes for the app
const animations = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideIn {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(88, 166, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-slideIn {
    animation: slideIn 0.5s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
`;

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ResumeProvider>
      <style jsx global>{animations}</style>
      <div className={`${inter.variable} ${roboto.variable} ${lato.variable} ${poppins.variable} ${montserrat.variable}`}>
        {children}
      </div>
    </ResumeProvider>
  );
}
