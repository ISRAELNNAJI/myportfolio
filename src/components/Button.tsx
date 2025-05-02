import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  color?: 'purple' | 'blue' | 'red';
  external?: boolean;
};

const Button = ({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
  color = 'purple',
  external = false,
}: ButtonProps) => {
  const colorStyles = {
    purple: 'border-purple-accent shadow-glow',
    blue: 'border-blue-accent shadow-glow-blue',
    red: 'border-red-accent shadow-glow-red',
  };

  const buttonClass = `btn-glow ${colorStyles[color]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link to={to} className={buttonClass}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      <span>{children}</span>
    </button>
  );
};

export default Button;