'use client';

import { useAccount, useBalance } from 'wagmi';
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

export default function PortfolioPage() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({ address });

  if (!isConnected) {
    return (
      <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: 'var(--glass-border)' }}>
          <Wallet size={48} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>PORTFOLIO LOCKED</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '400px' }}>
            Establish a neural handshake with your wallet to view deep-dive asset analytics and yield tracking.
          </p>
          <Button variant="primary">INITIALIZE CONNECTION</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Portfolio Hub" 
        description="Comprehensive asset tracking and yield performance analysis."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <AnimatedStat 
          label="Total Net Worth" 
          value={`$${(parseFloat(ethBalance?.formatted || '0') * 2482).toLocaleString()}`} 
          change={4.2} 
          icon={<TrendingUp size={20} />} 
        />
        <AnimatedStat 
          label="24H Performance" 
          value="+$242.12" 
          change={1.5} 
          icon={<ArrowUpRight size={20} />} 
        />
        <AnimatedStat 
          label="Yield APY (AVG)" 
          value="12.42%" 
          change={0.4} 
          icon={<ArrowUpRight size={20} />} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <Card title="ASSET BREAKDOWN" subtitle="Real-time token distribution">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              { symbol: 'ETH', name: 'Ethereum', balance: ethBalance?.formatted.slice(0, 6), value: `$${(parseFloat(ethBalance?.formatted || '0') * 2482).toLocaleString()}`, color: 'var(--accent-cyan)' },
              { symbol: 'USDC', name: 'USD Coin', balance: '1,240.00', value: '$1,240.00', color: '#2775ca' },
              { symbol: 'LINK', name: 'Chainlink', balance: '45.12', value: '$842.12', color: '#375bd2' },
            ].map((asset, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: asset.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.625rem' }}>
                  {asset.symbol[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{asset.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{asset.balance} {asset.symbol}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700 }}>{asset.value}</div>
                  <div style={{ fontSize: '0.625rem', color: '#10b981' }}>+2.4%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card title="YIELD STREAMS" subtitle="Active positions">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem' }}>Lido Staked ETH</span>
                <span className="mono" style={{ fontSize: '0.875rem', color: '#10b981' }}>4.2% APY</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem' }}>Aave v3 Supply</span>
                <span className="mono" style={{ fontSize: '0.875rem', color: '#10b981' }}>2.1% APY</span>
              </div>
            </div>
          </Card>
          
          <Card title="RECENT ACTIVITY" subtitle="Portfolio events">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <ArrowDownLeft size={16} color="#10b981" />
                <div style={{ fontSize: '0.75rem' }}>Received 500 USDC from Binance</div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <ArrowUpRight size={16} color="var(--accent-cyan)" />
                <div style={{ fontSize: '0.75rem' }}>Swapped 0.5 ETH for 1,240 USDC</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
