'use client';

import { useAccount } from 'wagmi';
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Shield, Vote, Clock, CheckCircle2 } from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { VoteModal } from "@/components/flux/VoteModal";
import { ProposalDiscussion } from "@/components/flux/ProposalDiscussion";
import { DelegatePower } from "@/components/flux/DelegatePower";
import { CreateProposalModal } from "@/components/flux/CreateProposalModal";
import { useState } from 'react';

export default function GovernancePage() {
  const { isConnected } = useAccount();
  const [selectedProposal, setSelectedProposal] = useState<any>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  if (!isConnected) {
    return (
      <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: 'var(--glass-border)' }}>
          <Shield size={48} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>GOVERNANCE LOCKED</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '400px' }}>
            Synchronize your neural signature to participate in protocol governance and voting.
          </p>
          <Button variant="primary">INITIALIZE GOVERNANCE</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Protocol Governance" 
        description="Participate in decentralized decision making and proposal voting."
        actions={
          <Button variant="primary" onClick={() => setIsCreateOpen(true)}>
            <Plus size={16} style={{ marginRight: '0.5rem' }} />
            NEW PROPOSAL
          </Button>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <AnimatedStat 
          label="Total Voting Power" 
          value="1,240 VP" 
          change={2.1} 
          icon={<Shield size={20} />} 
        />
        <AnimatedStat 
          label="Active Proposals" 
          value="12" 
          change={0} 
          icon={<Vote size={20} />} 
        />
        <AnimatedStat 
          label="Proposals Passed" 
          value="84" 
          change={4.2} 
          icon={<CheckCircle2 size={20} />} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card title="ACTIVE PROPOSALS" subtitle="Decentralized voting queue">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 'AIP-42', title: 'Implement Cross-Chain Liquidity Vaults', status: 'ACTIVE', votes: '1.2M / 2.5M', ends: '2D 14H' },
                { id: 'AIP-41', title: 'Update Gas Optimization Engine', status: 'ACTIVE', votes: '840K / 2.5M', ends: '4D 02H' },
                { id: 'AIP-40', title: 'New Asset Integration: $SOL', status: 'QUEUED', votes: '0 / 2.5M', ends: 'Starts in 1D' },
              ].map((prop, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.25rem' }}>{prop.id}</div>
                      <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>{prop.title}</div>
                    </div>
                    <div style={{ background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.625rem', fontWeight: 800 }}>
                      {prop.status}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-dim)' }}>QUORUM PROGRESS</span>
                        <span className="mono">{prop.votes}</span>
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: i === 0 ? '48%' : i === 1 ? '33%' : '0%', background: 'var(--accent-cyan)' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      <Clock size={14} />
                      {prop.ends}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedProposal(prop)}>VOTE</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <ProposalDiscussion />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <DelegatePower />
          <Card title="VOTING HISTORY" subtitle="Your governance activity">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>VOTED FOR AIP-{39-i}</div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>EXECUTED 12D AGO</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <VoteModal 
        isOpen={!!selectedProposal} 
        onClose={() => setSelectedProposal(null)} 
        proposal={selectedProposal} 
      />

      <CreateProposalModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />
    </div>
  );
}
