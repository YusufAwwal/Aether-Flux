import React from 'react';
import { Card } from './Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatWidgetProps {
  label: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
}

export const StatWidget: React.FC<StatWidgetProps> = ({ label, value, change, icon }) => {
  const isPositive = change && change > 0;

  return (
    <Card className="glass" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
          {label.toUpperCase()}
        </span>
        {icon && <div style={{ color: 'var(--accent-cyan)' }}>{icon}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
        <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</span>
        {change !== undefined && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.25rem', 
            fontSize: '0.75rem', 
            fontWeight: 600,
            color: isPositive ? '#10b981' : '#ef4444',
            paddingBottom: '0.25rem'
          }}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
    </Card>
  );
};
