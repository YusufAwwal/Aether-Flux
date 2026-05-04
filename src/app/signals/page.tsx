'use client';

import React, { useState } from 'react';
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Activity, Shield } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { SentimentHeatmap } from "@/components/flux/SentimentHeatmap";
import { RiskGauge } from "@/components/flux/RiskGauge";
import { NeuralPulse } from "@/components/flux/NeuralPulse";
import { NeuralNetwork } from "@/components/flux/NeuralNetwork";
import { SignalHistory } from "@/components/flux/SignalHistory";
import { NeuralScan } from "@/components/flux/NeuralScan";
import { InsightModal } from "@/components/flux/InsightModal";

export default function SignalsPage() {
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  return (
    <div>
      <NeuralScan />
      <PageHeader 
        title="Neural Signals" 
        description="AI-driven market intelligence and predictive sentiment analysis."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <AnimatedStat 
          label="Market Sentiment" 
          value="BULLISH" 
          change={84} 
          icon={<Brain size={20} />} 
        />
        <AnimatedStat 
          label="Volatility Index" 
          value="LOW" 
          change={12} 
          icon={<Activity size={20} />} 
        />
        <AnimatedStat 
          label="Neural Confidence" 
          value="92%" 
          change={1.5} 
          icon={<Shield size={20} />} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <Card title="INTELLIGENCE FEED" subtitle="Real-time predictive insights">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <NeuralPulse />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { type: 'SIGNAL', icon: <TrendingUp size={16} color="#10b981" />, title: 'ETH L2 Accumulation Detected', detail: 'On-chain flow suggests institutional accumulation in Arbitrum/Optimism ecosystems.', confidence: 'High' },
                { type: 'WARNING', icon: <AlertTriangle size={16} color="var(--accent-purple)" />, title: 'BTC Liquidity Gap', detail: 'Price level $64k shows thinning order books. Expect high slippage on large orders.', confidence: 'Medium' },
                { type: 'INSIGHT', icon: <Lightbulb size={16} color="var(--accent-cyan)" />, title: 'Stablecoin Velocity Spiking', detail: 'Increased USDC movement across bridges usually precedes major price action.', confidence: 'High' },
              ].map((sig, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedInsight(sig)}
                  style={{ background: 'var(--bg-card)', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    {sig.icon}
                    <span style={{ fontSize: '0.625rem', fontWeight: 800, letterSpacing: '0.1em' }}>{sig.type}</span>
                    <span className="mono" style={{ marginLeft: 'auto', fontSize: '0.625rem', color: 'var(--text-dim)' }}>CONFIDENCE: {sig.confidence}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{sig.title}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{sig.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <NeuralNetwork />
          <RiskGauge />
          <SentimentHeatmap />
          <Card title="PREDICTIVE MODELS" subtitle="Active neural nodes">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { name: 'SENTIMENT_ENGINE_v4', status: 'SYNCHRONIZED', accuracy: '94.2%' },
                { name: 'ON_CHAIN_ORACLE', status: 'ACTIVE', accuracy: '88.5%' },
                { name: 'WHALE_WATCHER_NODE', status: 'SCANNING', accuracy: '91.0%' },
              ].map((node, i) => (
                <div key={i} style={{ borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{node.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>{node.status}</span>
                    <span className="mono" style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>ACCURACY: {node.accuracy}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <SignalHistory />

      <InsightModal 
        isOpen={!!selectedInsight} 
        onClose={() => setSelectedInsight(null)} 
        insight={selectedInsight} 
      />
    </div>
  );
}
