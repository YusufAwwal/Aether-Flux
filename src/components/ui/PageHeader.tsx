import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions }) => {
  return (
    <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          {title.toUpperCase()}
        </h1>
        {description && <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{description}</p>}
      </div>
      {actions && <div style={{ display: 'flex', gap: '1rem' }}>{actions}</div>}
    </header>
  );
};
