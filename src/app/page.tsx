import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ConnectWallet } from "@/components/ui/ConnectWallet";
import { Terminal } from "@/components/flux/Terminal";
import { FluxVisualizer } from "@/components/flux/FluxVisualizer";
import { MetricsGrid } from "@/components/flux/MetricsGrid";
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

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ height: '400px' }}>
          <FluxVisualizer />
        </div>
        <div style={{ height: '400px' }}>
          <Terminal />
        </div>
      </div>
    </div>
  );
}
