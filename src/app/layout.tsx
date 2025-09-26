// app/layout.tsx
import './globals.css';
import type{ReactNode} from 'react';
import ToastProvider from '../components/ToastProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Secure Communications Platform</title>
      </head>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}