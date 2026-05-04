'use client';

import { useAccount } from 'wagmi';
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Zap, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { YieldCalculator } from "@/components/flux/YieldCalculator";
import { YieldFlow } from "@/components/flux/YieldFlow";
import { YieldComparison } from "@/components/flux/YieldComparison";
import { YieldHealth } from "@/components/flux/YieldHealth";
import { ValidatorStats } from "@/components/flux/ValidatorStats";

export default function YieldPage() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: 'var(--glass-border)' }}>
          <Zap size={48} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>OPTIMIZER OFFLINE</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '400px' }}>
            Initialize your neural connection to access high-yield staking pools and liquidity optimization strategies.
          </p>
          <Button variant="primary">CONNECT FOR YIELD</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Yield Optimizer" 
        description="Automated liquidity management and high-yield staking strategies."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <AnimatedStat 
          label="Estimated Annual Yield" 
          value="$1,242.00" 
          change={8.5} 
          icon={<TrendingUp size={20} />} 
        />
        <AnimatedStat 
          label="Average APY" 
          value="14.2%" 
          change={1.2} 
          icon={<Zap size={20} />} 
        />
        <AnimatedStat 
          label="Safety Score" 
          value="98/100" 
          change={0} 
          icon={<ShieldCheck size={20} />} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <YieldFlow />
          <Card title="ACTIVE STRATEGIES" subtitle="Optimized capital allocation">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
              {[
                { name: 'Lido ETH Staking', platform: 'Lido', apy: '4.2%', tvl: '$12.4B', risk: 'LOW' },
                { name: 'USDC/ETH LP', platform: 'Uniswap v3', apy: '18.5%', tvl: '$840M', risk: 'MEDIUM' },
                { name: 'DAI Supply', platform: 'Aave v3', apy: '3.1%', tvl: '$2.1B', risk: 'LOW' },
              ].map((strategy, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{strategy.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>PLATFORM: {strategy.platform}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>TVL</div>
                    <div className="mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{strategy.tvl}</div>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: '100px' }}>
                    <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1rem' }}>{strategy.apy} APY</div>
                    <div style={{ fontSize: '0.625rem', color: strategy.risk === 'LOW' ? '#10b981' : 'var(--accent-purple)' }}>{strategy.risk} RISK</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ArrowRight size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <YieldComparison />
          <ValidatorStats />
          <YieldCalculator />
          <Card title="OPTIMIZER LOGS" subtitle="Neural engine activity">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '200px', overflowY: 'auto' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '0.75rem', color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>[SYSTEM]</span> Rebalancing Uniswap v3 position... SUCCESS
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <YieldHealth />
    </div>
  );
}
