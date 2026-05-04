'use client';

import { useAccount, useBalance } from 'wagmi';
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { AssetAllocation } from "@/components/flux/AssetAllocation";
import { PerformanceChart } from "@/components/flux/PerformanceChart";
import { PortfolioTx } from "@/components/flux/PortfolioTx";
import { YieldBreakdown } from "@/components/flux/YieldBreakdown";
import { TokenIcon } from "@/components/ui/TokenIcon";
import { NetWorthTicker } from "@/components/flux/NetWorthTicker";

export default function PortfolioPage() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({ 
    address,
    query: { refetchInterval: 10000 } 
  });

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

  const netWorthValue = `$${(parseFloat(ethBalance?.formatted || '0') * 2482).toLocaleString()}`;

  return (
    <div>
      <PageHeader 
        title="Portfolio Hub" 
        description="Comprehensive asset tracking and yield performance analysis."
      />

      <div style={{ marginBottom: '2.5rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '1.5rem', alignItems: 'end' }}>
        <NetWorthTicker value={netWorthValue} />
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
                <TokenIcon symbol={asset.symbol} color={asset.color} />
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
          <AssetAllocation />
          <PerformanceChart />
          <YieldBreakdown />
          <PortfolioTx />
        </div>
      </div>
    </div>
  );
}
