'use client';

import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Web3Provider } from "@/lib/Web3Provider";
import { Loader } from "@/components/ui/Loader";
import { FluxBackground } from "@/components/ui/FluxBackground";
import { AnimatePresence } from "framer-motion";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Web3Provider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content" style={{ display: 'flex' }}>
            <FluxBackground />
            <Sidebar />
            <main style={{ marginLeft: '240px', minWidth: '0', flex: 1, minHeight: '100vh', padding: '2rem' }}>
              {children}
            </main>
          </div>
        )}
      </AnimatePresence>
    </Web3Provider>
  );
}
