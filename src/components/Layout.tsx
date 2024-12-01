import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {children}
    </div>
  );
};