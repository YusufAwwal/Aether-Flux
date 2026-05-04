import { PageHeader } from "@/components/ui/PageHeader";
import { StatWidget } from "@/components/ui/StatWidget";
import { Button } from "@/components/ui/Button";
import { ConnectWallet } from "@/components/ui/ConnectWallet";
import { Terminal } from "@/components/flux/Terminal";
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <StatWidget label="Gas Price" value="24 Gwei" change={-12.5} icon={<Activity size={20} />} />
        <StatWidget label="TPS" value="1,420" change={5.2} icon={<Zap size={20} />} />
        <StatWidget label="Whale Activity" value="High" change={2.1} icon={<Shield size={20} />} />
        <StatWidget label="Nodes Active" value="12,842" change={0.4} icon={<Globe size={20} />} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ 
          height: '400px', 
          background: 'var(--bg-card)', 
          borderRadius: '8px', 
          border: 'var(--glass-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-dim)'
        }}>
          [ Flux Activity Visualizer Placeholder ]
        </div>
        <div style={{ height: '400px' }}>
          <Terminal />
        </div>
      </div>
    </div>
  );
}
