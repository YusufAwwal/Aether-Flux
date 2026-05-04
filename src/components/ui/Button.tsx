import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        !children && styles.iconOnly,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
