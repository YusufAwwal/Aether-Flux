import { PageHeader } from "@/components/ui/PageHeader";
import { FluxStream } from "@/components/flux/FluxStream";
import { FluxVisualizer } from "@/components/flux/FluxVisualizer";
import { Terminal } from "@/components/flux/Terminal";
import { LiquidityFlow } from "@/components/flux/LiquidityFlow";
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
          <FluxStream />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <LiquidityFlow />
          <Terminal />
          <Card title="NETWORK NODES" subtitle="Active synchronization status">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                    <span className="mono" style={{ fontSize: '0.75rem' }}>NODE_00{i}</span>
                  </div>
                  <span style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>14ms Latency</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
