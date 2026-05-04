'use client';

import React, { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, Info, Activity } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { AssetAllocation } from "@/components/flux/AssetAllocation";
import { PerformanceChart } from "@/components/flux/PerformanceChart";
import { PortfolioTx } from "@/components/flux/PortfolioTx";
import { YieldBreakdown } from "@/components/flux/YieldBreakdown";
import { TokenIcon } from "@/components/ui/TokenIcon";
import { NetWorthTicker } from "@/components/flux/NetWorthTicker";
import { NFTGallery } from "@/components/flux/NFTGallery";
import { TokenSearch } from "@/components/flux/TokenSearch";
import { TradeGas } from "@/components/flux/TradeGas";
import { RefreshButton } from "@/components/ui/RefreshButton";
import { RiskGauge } from "@/components/flux/RiskGauge";
import { PortfolioHealth } from "@/components/flux/PortfolioHealth";
import { Modal } from "@/components/ui/Modal";

export default function PortfolioPage() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance, refetch } = useBalance({ 
    address,
    query: { refetchInterval: 10000 } 
  });
  const [selectedToken, setSelectedToken] = useState<any>(null);

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

  const ASSETS = [
    { symbol: 'ETH', name: 'Ethereum', balance: ethBalance?.formatted.slice(0, 6), value: `$${(parseFloat(ethBalance?.formatted || '0') * 2482).toLocaleString()}`, color: 'var(--accent-cyan)', mcap: '$284.2B', volume: '$12.4B' },
    { symbol: 'USDC', name: 'USD Coin', balance: '1,240.00', value: '$1,240.00', color: '#2775ca', mcap: '$32.1B', volume: '$4.2B' },
    { symbol: 'LINK', name: 'Chainlink', balance: '45.12', value: '$842.12', color: '#375bd2', mcap: '$11.8B', volume: '$0.8B' },
  ];

  return (
    <div>
      <PageHeader 
        title="Portfolio Hub" 
        description="Comprehensive asset tracking and yield performance analysis."
        actions={
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <RefreshButton onRefresh={() => refetch()} />
            <Button variant="outline">Export CSV</Button>
          </div>
        }
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

      <TokenSearch />

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card title="ASSET BREAKDOWN" subtitle="Real-time token distribution">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
              {ASSETS.map((asset, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedToken(asset)}
                  style={{ background: 'var(--bg-card)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                  className="asset-row"
                >
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
          <NFTGallery />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <TradeGas />
          <RiskGauge />
          <AssetAllocation />
          <PerformanceChart />
          <YieldBreakdown />
          <PortfolioTx />
        </div>
      </div>

      <PortfolioHealth />

      <Modal 
        isOpen={!!selectedToken} 
        onClose={() => setSelectedToken(null)}
        title={`${selectedToken?.name} INTELLIGENCE`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <TokenIcon symbol={selectedToken?.symbol || ''} color={selectedToken?.color} size={48} />
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedToken?.value}</h2>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>{selectedToken?.balance} {selectedToken?.symbol} AVAILABLE</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: 'var(--glass-border)' }}>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>MARKET CAP</div>
              <div className="mono" style={{ fontSize: '1rem', fontWeight: 700 }}>{selectedToken?.mcap}</div>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: 'var(--glass-border)' }}>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>24H VOLUME</div>
              <div className="mono" style={{ fontSize: '1rem', fontWeight: 700 }}>{selectedToken?.volume}</div>
            </div>
          </div>

          <div style={{ height: '100px', width: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={24} color="var(--accent-cyan)" className="pulse" />
            <span style={{ marginLeft: '0.75rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>GENERATING PRICE_ACTION_STREAM...</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary" fullWidth>SWAP ASSET</Button>
            <Button variant="outline" fullWidth>SEND</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
