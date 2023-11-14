import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex h-full w-full flex-col overflow-hidden bg-background">
      {children}
    </main>
  );
}