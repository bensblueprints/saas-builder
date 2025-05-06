import React from 'react';
import Layout from '../components/layout/Layout';
import ProgressStats from '../components/progress/ProgressStats';
import { mockData } from '../data/mockData';
import { Layers, Zap, Code, FileCheck } from 'lucide-react';

const ProgressPage: React.FC = () => {
  const milestones = [
    {
      id: 1,
      title: 'Idea Validated',
      description: 'Your SaaS idea has been validated against core pillars',
      icon: <Lightbulb className="h-5 w-5" />,
      completed: true,
    },
    {
      id: 2,
      title: 'Tech Stack Selected',
      description: 'Optimal technology choices for your application',
      icon: <Layers className="h-5 w-5" />,
      completed: true,
    },
    {
      id: 3,
      title: 'User Flow Generated',
      description: 'Visual representation of user journeys',
      icon: <GitBranch className="h-5 w-5" />,
      completed: true,
    },
    {
      id: 4,
      title: 'Development Started',
      description: 'First code has been written for your application',
      icon: <Code className="h-5 w-5" />,
      completed: true,
    },
    {
      id: 5,
      title: 'MVP Completed',
      description: 'Minimum viable product is ready for testing',
      icon: <FileCheck className="h-5 w-5" />,
      completed: false,
    },
  ];
  
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">Project Progress</h1>
        
        <div className="space-y-8">
          <ProgressStats blueprint={mockData} />
          
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Project Milestones</h2>
            
            <div className="mt-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative pb-8">
                  {index < milestones.length - 1 && (
                    <div
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-slate-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        milestone.completed ? 'bg-green-100' : 'bg-slate-100'
                      }`}>
                        <span className={milestone.completed ? 'text-green-600' : 'text-slate-400'}>
                          {milestone.icon}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-medium">
                          <span className={milestone.completed ? 'text-slate-900' : 'text-slate-500'}>
                            {milestone.title}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-slate-500">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    {milestone.completed && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Completed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Import the icons used in the component
import { Lightbulb, GitBranch } from 'lucide-react';

export default ProgressPage;