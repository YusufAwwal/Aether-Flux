'use client';

import React, { useState } from "react";

import { Sidebar } from "@/components/ui/Sidebar";
import { Topbar } from "@/components/ui/Topbar";
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
          <div key="content" style={{ display: 'flex', minHeight: '100vh' }}>
            <div className="crtOverlay" />
            <div className="noiseOverlay" />
            <div className="scanline" />
            <FluxBackground />
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '240px' }}>
              <Topbar />
              <main style={{ flex: 1, padding: '2rem', overflowX: 'hidden' }}>
                {children}
              </main>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Web3Provider>
  );
}
