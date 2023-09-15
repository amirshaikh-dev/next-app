import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Common Layout Of Routing Component</h1>
      {children}
    </>
  );
}
