import React from 'react';
import { SaasBlueprint } from '../../types';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface ProgressStatsProps {
  blueprint: SaasBlueprint;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({ blueprint }) => {
  const { kanbanTickets } = blueprint;
  
  const todoCount = kanbanTickets.filter(t => t.status === 'todo').length;
  const inProgressCount = kanbanTickets.filter(t => t.status === 'inProgress').length;
  const doneCount = kanbanTickets.filter(t => t.status === 'done').length;
  const totalCount = kanbanTickets.length;
  
  const completionPercentage = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
  
  const stats = [
    {
      name: 'Todo',
      count: todoCount,
      icon: <Circle className="h-5 w-5 text-slate-400" />,
      color: 'text-slate-700',
    },
    {
      name: 'In Progress',
      count: inProgressCount,
      icon: <Clock className="h-5 w-5 text-amber-500" />,
      color: 'text-amber-700',
    },
    {
      name: 'Completed',
      count: doneCount,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      color: 'text-green-700',
    },
  ];
  
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Project Progress</h2>
      
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Completion</span>
          <span className="text-sm font-medium text-slate-700">{completionPercentage}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-2">
              {stat.icon}
              <h3 className={`font-medium ${stat.color}`}>{stat.name}</h3>
            </div>
            <p className="mt-2 text-2xl font-semibold">{stat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStats;