import { PageHeader } from "@/components/ui/PageHeader";
import { WhaleAlert } from "@/components/flux/WhaleAlert";
import { Card } from "@/components/ui/Card";
import { ShieldAlert, Info } from "lucide-react";

const ALERT_HISTORY = [
  { id: 1, type: 'TRANSFER', value: '$45,000,000', asset: 'USDC', from: 'Circle', to: 'Binance', time: '5m ago' },
  { id: 2, type: 'MINT', value: '$100,000,000', asset: 'USDT', from: 'Tether Treasury', to: 'Unknown', time: '12m ago' },
  { id: 3, type: 'LIQUIDATION', value: '$12,400,000', asset: 'ETH', from: 'Aave v3', to: 'Slippage', time: '1h ago' },
  { id: 4, type: 'BURN', value: '$5,000,000', asset: 'SHIB', from: 'Burn Address', to: 'Void', time: '2h ago' },
];

export default function AlertsPage() {
  return (
    <div>
      <PageHeader 
        title="Whale Alerts" 
        description="Monitoring significant capital movements and treasury activity."
      />

      <WhaleAlert />

      <div style={{ marginTop: '2.5rem' }}>
        <Card title="HISTORICAL ALERTS" subtitle="Last 24 hours of significant activity">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
            {ALERT_HISTORY.map((alert) => (
              <div key={alert.id} style={{ background: 'var(--bg-card)', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '4px', 
                  background: 'rgba(112, 0, 255, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-purple)'
                }}>
                  <ShieldAlert size={18} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{alert.type}</span>
                    <span className="mono" style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>{alert.value} {alert.asset}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                    FROM: <span className="mono">{alert.from}</span> → TO: <span className="mono">{alert.to}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{alert.time}</div>
                  <button style={{ color: 'var(--accent-cyan)', background: 'none', border: 'none', padding: '0.25rem', marginTop: '0.25rem' }}>
                    <Info size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
