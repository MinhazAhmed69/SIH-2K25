// app/layout.tsx
import './globals.css';
import type{ReactNode} from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Secure Communications Platform</title>
      </head>
      <body>{children}</body>
    </html>
  );
}