import React from 'react';
import Layout from '../components/layout/Layout';
import { mockData } from '../data/mockData';
import UserFlowDiagram from '../components/flow/UserFlowDiagram';

const FlowPage: React.FC = () => {
  const { userFlow } = mockData;
  
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">User Flow Diagram</h1>
        
        <div className="mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">App Flow Visualization</h2>
          <p className="text-slate-700">
            This diagram visualizes the user's journey through your application, showing the relationship 
            between different pages and interaction points.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-blue-100 border border-blue-300"></div>
              <span className="text-sm text-slate-700">Page</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-amber-100 border border-amber-300"></div>
              <span className="text-sm text-slate-700">Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-green-100 border border-green-300"></div>
              <span className="text-sm text-slate-700">Action</span>
            </div>
          </div>
          
          <UserFlowDiagram userFlow={userFlow} />
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Tips for User Flow</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Keep the critical user paths as short as possible</li>
              <li>• Ensure there are clear entry and exit points</li>
              <li>• Provide escape routes from all decision points</li>
              <li>• Consider error states and recovery paths</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Next Steps</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Review the proposed flow with stakeholders</li>
              <li>• Identify potential bottlenecks or confusion points</li>
              <li>• Test the flow with potential users</li>
              <li>• Refine based on feedback before development</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlowPage;