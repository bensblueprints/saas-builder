import React from 'react';
import { TechStackItem } from '../../types';
import Card from '../ui/Card';

interface TechStackCardProps {
  item: TechStackItem;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ item }) => {
  const getCategoryIcon = () => {
    switch (item.category.toLowerCase()) {
      case 'frontend':
        return '🖥️';
      case 'backend':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'authentication':
        return '🔐';
      case 'deployment':
        return '🚀';
      case 'testing':
        return '🧪';
      default:
        return '📦';
    }
  };

  return (
    <Card className="h-full">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">
          {getCategoryIcon()}
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{item.category}</p>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default TechStackCard;