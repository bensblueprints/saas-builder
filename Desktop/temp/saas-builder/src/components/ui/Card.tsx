import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  className = '',
  children,
  footer,
}) => {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>
      {(title || description) && (
        <div className="border-b border-slate-200 p-4">
          {title && <h3 className="font-semibold">{title}</h3>}
          {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && <div className="border-t border-slate-200 p-4">{footer}</div>}
    </div>
  );
};

export default Card;