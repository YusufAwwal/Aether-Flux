import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ConnectWallet } from "@/components/ui/ConnectWallet";
import { Terminal } from "@/components/flux/Terminal";
import { FluxVisualizer } from "@/components/flux/FluxVisualizer";
import { FluxStream } from "@/components/flux/FluxStream";
import { MetricsGrid } from "@/components/flux/MetricsGrid";
import { WhaleAlert } from "@/components/flux/WhaleAlert";
import { GasHeatmap } from "@/components/flux/GasHeatmap";
import { ProtocolStats } from "@/components/flux/ProtocolStats";
import { MarketDominance } from "@/components/flux/MarketDominance";
import { Activity, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div>
      <PageHeader 
        title="Network Overview" 
        description="Real-time pulse of the decentralized web."
        actions={
          <>
            <Button variant="outline" icon={<Globe size={16} />}>Scan Network</Button>
            <ConnectWallet />
          </>
        }
      />

      <div style={{ marginBottom: '2.5rem' }}>
        <MetricsGrid />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ height: '300px' }}>
            <FluxVisualizer />
          </div>
          <FluxStream />
          <GasHeatmap />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Terminal />
          <ProtocolStats />
          <MarketDominance />
          <div style={{ 
            background: 'var(--bg-card)', 
            borderRadius: '8px', 
            border: 'var(--glass-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>QUICK STATS</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Active Nodes</span>
              <span className="mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>12,842</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Block Height</span>
              <span className="mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>18,492,021</span>
            </div>
          </div>
        </div>
      </div>

      <WhaleAlert />
    </div>
  );
}
