import React from 'react';
import Card from '../ui/Card';
import { CoreFeature } from '../../types';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface FeatureCardProps {
  feature: CoreFeature;
  onConvertToKanban?: (feature: CoreFeature) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onConvertToKanban }) => {
  const getPriorityBadge = () => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-amber-100 text-amber-800',
      low: 'bg-green-100 text-green-800',
    };
    
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[feature.priority]}`}>
        {feature.priority.charAt(0).toUpperCase() + feature.priority.slice(1)}
      </span>
    );
  };
  
  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <h3 className="font-medium">{feature.title}</h3>
          {getPriorityBadge()}
        </div>
        <p className="mt-2 text-sm text-slate-600 flex-grow">{feature.description}</p>
        
        {onConvertToKanban && (
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onConvertToKanban(feature)}
              rightIcon={<ArrowRight className="h-3 w-3" />}
            >
              Convert to Kanban
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;