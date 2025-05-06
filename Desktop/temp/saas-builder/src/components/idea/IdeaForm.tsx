import React, { useState } from 'react';
import Button from '../ui/Button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { SaasIdea } from '../../types';
import { analyzeIdea } from '../../services/ai';

interface IdeaFormProps {
  onSubmit: (idea: SaasIdea) => void;
}

const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit }) => {
  const [idea, setIdea] = useState<SaasIdea>({
    name: '',
    description: '',
    targetAudience: '',
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIdea((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    try {
      // Analyze the idea using AI
      const analysis = await analyzeIdea(
        `Name: ${idea.name}\nDescription: ${idea.description}\nTarget Audience: ${idea.targetAudience}`
      );
      
      // Pass both the idea and the analysis to the parent
      onSubmit({
        ...idea,
        aiAnalysis: analysis
      });
    } catch (error) {
      console.error('Error analyzing idea:', error);
      // Fall back to just submitting the idea without analysis
      onSubmit(idea);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const isValid = idea.name && idea.description && idea.targetAudience;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            SaaS Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={idea.name}
            onChange={handleChange}
            placeholder="E.g., TaskFlow, InvoiceNinja"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={idea.description}
            onChange={handleChange}
            placeholder="Describe your SaaS idea in detail..."
            rows={4}
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="targetAudience" className="mb-1 block text-sm font-medium text-slate-700">
            Target Audience
          </label>
          <input
            id="targetAudience"
            name="targetAudience"
            type="text"
            required
            value={idea.targetAudience}
            onChange={handleChange}
            placeholder="E.g., Small business owners, freelancers"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={!isValid || isAnalyzing}
        fullWidth
        rightIcon={isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
      >
        {isAnalyzing ? 'Analyzing with AI...' : 'Validate My Idea'}
      </Button>
    </form>
  );
};

export default IdeaForm;