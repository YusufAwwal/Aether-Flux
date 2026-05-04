import { PageHeader } from "@/components/ui/PageHeader";
import { FluxStream } from "@/components/flux/FluxStream";
import { FluxVisualizer } from "@/components/flux/FluxVisualizer";
import { Terminal } from "@/components/flux/Terminal";
import { LiquidityFlow } from "@/components/flux/LiquidityFlow";
import { NodeMap } from "@/components/flux/NodeMap";
import { Card } from "@/components/ui/Card";

export default function FluxPage() {
  return (
    <div>
      <PageHeader 
        title="Flux Stream" 
        description="Detailed real-time transaction analysis and network velocity."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ height: '400px' }}>
            <FluxVisualizer />
          </div>
          <NodeMap />
          <FluxStream />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <LiquidityFlow />
          <Terminal />
          <Card title="NETWORK HEALTH" subtitle="Global synchronization status">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Sync Level</span>
                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#10b981' }}>OPTIMAL</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Validator Count</span>
                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600 }}>3,242</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
