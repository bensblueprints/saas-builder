import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import IdeaForm from '../components/idea/IdeaForm';
import { SaasIdea, SaasBlueprint, CorePillar } from '../types';
import { mockData } from '../data/mockData';
import PillarCard from '../components/validation/PillarCard';
import { Sparkles } from 'lucide-react';

const IdeasPage: React.FC = () => {
  const [blueprint, setBlueprint] = useState<SaasBlueprint | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (idea: SaasIdea) => {
    setIsLoading(true);
    
    // Use the AI analysis to enhance the mockData
    const enhancedPillars = mockData.pillars.map(pillar => ({
      ...pillar,
      score: idea.aiAnalysis ? Math.round(idea.aiAnalysis.score * 10) : pillar.score,
      suggestions: idea.aiAnalysis ? 
        [...pillar.suggestions, ...idea.aiAnalysis.suggestions] : 
        pillar.suggestions
    }));

    const newBlueprint = {
      ...mockData,
      idea,
      pillars: enhancedPillars,
      validationScore: idea.aiAnalysis ? 
        Math.round(idea.aiAnalysis.confidence * 100) : 
        mockData.validationScore
    };

    setBlueprint(newBlueprint);
    setIsLoading(false);
  };
  
  const getValidationScore = (pillars: CorePillar[]): number => {
    if (!pillars.length) return 0;
    const totalScore = pillars.reduce((sum, pillar) => sum + pillar.score, 0);
    return Math.round((totalScore / (pillars.length * 10)) * 100);
  };
  
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl">Validate Your SaaS Idea</h1>
        
        {!blueprint ? (
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-xl font-semibold">Describe your SaaS idea</h2>
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-slate-600">(Powered by AI)</span>
            </div>
            <IdeaForm onSubmit={handleSubmit} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{blueprint.idea.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">Target audience: {blueprint.idea.targetAudience}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
                  <div className="text-sm font-medium">AI Confidence:</div>
                  <div className="text-lg font-semibold text-blue-700">
                    {blueprint.validationScore}%
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-700">{blueprint.idea.description}</p>
            </div>
            
            <div>
              <h2 className="mb-4 text-xl font-semibold">AI-Powered Validation Results</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blueprint.pillars.map((pillar, index) => (
                  <PillarCard key={index} pillar={pillar} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IdeasPage;