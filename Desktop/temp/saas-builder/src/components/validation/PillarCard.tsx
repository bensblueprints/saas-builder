import React from 'react';
import Card from '../ui/Card';
import { CorePillar } from '../../types';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface PillarCardProps {
  pillar: CorePillar;
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
  const getScoreIcon = () => {
    if (pillar.score >= 8) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (pillar.score >= 5) {
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    } else {
      return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getScoreColor = () => {
    if (pillar.score >= 8) return 'text-green-600';
    if (pillar.score >= 5) return 'text-amber-600';
    return 'text-red-600';
  };
  
  return (
    <Card className="h-full transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{pillar.name}</h3>
        <div className={`flex items-center gap-1 font-semibold ${getScoreColor()}`}>
          {pillar.score}/10
          {getScoreIcon()}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
      
      {pillar.suggestions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-slate-700">Suggestions:</h4>
          <ul className="mt-1 space-y-1">
            {pillar.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-slate-600">
                • {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default PillarCard;