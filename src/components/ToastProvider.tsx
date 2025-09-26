import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" toastOptions={{
        style: { fontSize: '1rem', fontWeight: 500 },
        duration: 2500,
      }} />
      {children}
    </>
  );
}
